
const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username :{
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ['customer', 'owner'],
        required : true
    },
    tokens : [{ //for JWT
        type : String
    }],
    created_at : {
        type : Date,
        default : Date.now()
    },
    updated_at : {
        type : Date,
        default : Date.now()
    }
})

const userModel = mongoose.model('userDetails', userSchema);

module.exports = {userModel}