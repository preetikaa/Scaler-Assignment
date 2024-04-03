// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

import mongoose from "mongoose";
const Schema = mongoose.Schema;


const RMhotelSchema = new Schema({  //RMhotelSchema means shema object and it has properties like below

    bookingid : {
        type : String,
        required: false
    },
    nic : {
        type : String,
        required: false
    }, 
    name : {
        type :String,
        required: false
    },
    phone : {
        type :Number,
        required: false,
        maxLength: 10
    },
    address1 : {
        type : String,
        required: false
    },
    address2 : {
        type :String,
        required: false
    },
    city : {
        type :String,
        required: false
    },
    state : {
        type : String,
        required: false
    },
    zip : {
        type :Number,
        required: false
    },
    email : {
        type :String,
        required: false,
        unique: [false, 'This email is already exits']
    },
    checkin : {
        type : Date,
        required: false
    },
    checkout : {
        type :Date,
        required: false
    },
    roomtype : {
        type :String,
        required: false
    },
    roomCount : {
        type : Number,////////////String changed to number
        required: false
    },
    totRoom : {
        type :Number,
        required: false
    },
    noadults : {
        type :Number,
        required: false
    },
    nochildren : {
        type :Number,
        required: false
    }

})
//create Reservation object with using ("table name/document name",given above schema object name)
// const Reservation = mongoose.model("Reservation",RMhotelSchema);

// module.exports = Reservation;//remember to export your given created reservation / object

export default mongoose.model("Reservation",RMhotelSchema);

