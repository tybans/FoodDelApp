const mongoose = require('mongoose');
// const main = require('..db/')

const restaurantSchema = mongoose.Schema({
    name :{
        type : String,
        required : true,
    },
    description : {
        type : String
    },
    owner_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'userDetails',
        required : true
    },
    menu: [
        {
          name: { type: String, required: true },
          price: { type: Number, required: true },
          description: { type: String },
        },
      ],
    // tokens : { //for JWT
    //     type : String
    // },
    created_at : {
        type : Date,
        default: Date.now()
    },
    updated_at : {
        type : Date,
        default : Date.now()
    }
})

const restaurantModel = mongoose.model('restaurantDetail', restaurantSchema);

module.exports = {restaurantModel}