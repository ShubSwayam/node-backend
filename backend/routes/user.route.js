const express = require('express')
const app = express()
const userRoute = express.Router()

// user model
const User = require('../models/users')


// Register
userRoute.route('/register').post((req, res, next) => {
    User.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get By Single User
userRoute.route('/read/:id').get((req, res) => {
    User.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log("get data for user", data);
            res.json(data)
        }
    })
})


// Get By All User
userRoute.route('/read').get((req, res) => {
    User.find({}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log("get data for user", data);
            res.json(data)
        }
    })
})


// Update Users
userRoute.route('/update/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})


// Delete users
userRoute.route('/delete/:id').delete((req, res, next) => {
    User.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})



module.exports = userRoute;