require("dotenv").config();
const router = require('express').Router();
const { UserModel } = require('../models');
const { UniqueConstraintError } = require('sequelize/lib/errors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validateSession = require('../middleware/validate-jwt');

router.post('/register', async (req, res) => {
    let { email, password, fName, phoneNumber } = req.body.user;
    try {
        const User = await UserModel.create({
            email,
            password: bcrypt.hashSync(password, 13),
            fName,
            phoneNumber
        });
        let token = jwt.sign({ id: User.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
        res.status(201).json({
            message: "User successfully registered!",
            user: User,
            SessionToken: token
        });
    } catch (err) {
        if (err instanceof UniqueConstraintError) {
            res.status(409).json({
                message: "Email already in use",
            });
        } else {
            res.status(500).json({
                message: "Failed to register user",
            });
        }
    }
});

/*
{
    "user":{
        "email": "test@test.com",
        "password": "test",
        "fName": "tester",
        "phoneNumber": "555"
    }
}
*/

router.post("/login", async (req, res) => {
    let { email, password } = req.body.user;
    try {
        let loginUser = await UserModel.findOne({
            where: {
                email: email,
            },
        });
        if (loginUser) {
            let passwordComparison = await bcrypt.compare(password, loginUser.password);
            if (passwordComparison) {
                let token = jwt.sign({ id: loginUser.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });
                res.status(200).json({
                    user: loginUser,
                    message: "User successfully logged in",
                    SessionToken: token
                });
            } else {
                res.status(401).json({
                    message: "Incorrect email or password"
                });
            };
        } else {
            res.status(401).json({
                message: "Incorrect email or password"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Failed to log user in"
        })
    }
});
/*
{
    "user":{
        "email": "test@test.com",
        "password": "test"
    }
}
*/

router.put('/updateemail', validateSession, async (req, res) => {
    const updateEmail = {
        email: req.body.user.email
    };
    const query = { where: { id: req.user.id } };
    let updatedUser = await UserModel.update(updateEmail, query)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(500).json({ error: err }));
});
router.delete("/delete/:id", validateSession, async (req, res) => {  //:id is a parameter
    try {
        const query = {
            where: {
                id: req.params.id
            }
        };
        const userDelete = await UserModel.destroy(query);
        res.status(200).json({ message: "User Removed", userDelete });
    } catch (err) {
        res.status(500).json({ error: err });
    }
});
module.exports = router;