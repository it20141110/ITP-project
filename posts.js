const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
//variables
    EmployeeID:{
        type:String,
        requred:true 
    },
    EmployeeName:{
        type:String,
        required:true
    },
    PayMethod:{
        type:String,
        required:true
    },
    NoOfDays:{
        type:Number,
        required:true
    },
    RatePerDay:{
        type:Number,
        required:true
    },
    OThrs:{
        type:Number,
        required:true
    },
    OTperhr:{
        type:Number,
        required:true
    },
    TotalOT:{
        type:Number,
        required:true
    },
    NetSalary:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Posts', postSchema);