const userModel = require('../models/user.model');

async function addUserDataControler(req, res) {
    console.log(req.body);
    
    try {
        let userDetail = userModel.userModel({
            username: req.body.username,
            email : req.body.email,
            password : req.body.password,
            role : req.body.role,
            tokens : req.body.role,
            created_at : req.body.created_at,
            updated_at : req.body.updated_at
        })
        await userDetail.save()
        res.send("Userdata added successfully...")
    } catch (error) {
        console.log(error);
        res.send("Couldn't add the User Data...")
    }
}


async function getUserDataController(req, res) {
    try {
        userModel.userModel.find({})
            .then(doc => res.send(doc))
            .catch(error => res.send( error,'Something Went Wrong While getting User Data...'))
    } catch (error) {
        console.log(error);
        res.send('Something Went Wrong from GET controller...')
    }
}

async function getUserDataByIdController(req, res) {
    try {
        userModel.userModel.findById(req.params.id)
            .then(doc => res.send(doc))
            .catch(err => res.send('Error in getting User Data by id...'))
    } catch (error) {
        console.log(error);
        res.send('Something Went Wrong from ID Controller...')
    }
}

module.exports ={
    addUserDataControler,
    getUserDataController,
    getUserDataByIdController
}