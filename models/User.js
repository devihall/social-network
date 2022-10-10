//require dependencies
const { Schema, model, Types } = require("mongoose");
const moment = require("moment");


//user schema
const UserSchema = new Schema ({ 
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

}