const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');



const PetSchema = new mongoose.Schema
({
    name: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be 3 characters or longer"],
        unique:true
    },
    type: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Pet type must be 3 characters or longer"]
    },
    description:{
        type:String,
        required:[true,"Pet description is required"],
        minlength: [3, "Pet description must be 3 characters or longer"]

    },

    skill1:{
        type:String,
        default:""
    },
    skill2:{
        type:String,
        default:""

    },
    skill3:{
        type:String,
        default:""

    },

    likes : {type: Number,
        default : 0
    }
}, {timestamps:true});

PetSchema.plugin(uniqueValidator, { message: '{PATH} is already in the database' });
mongoose.model("Pet", PetSchema);
module.exports = PetSchema;