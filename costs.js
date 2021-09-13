const mongoose = require('mongoose');

const costSchema = new mongoose.Schema({
//variables
    IncomeID:{
        type:String,
        requred:true 
    },
    IncomeActivity:{
        type:String,
        required:true
    },
    PricePerKg:{
        type:Number,
        required:true
    },
    NetWeight:{
        type:Number,
        required:true
    },
    TotalIncome:{
        type:Number,
        required:true
    },
    OutcomeID:{
        type:String,
        required:true
    },
    OutcomeActivity:{
        type:String,
        required:true
    },
    Payment:{
        type:Number,
        required:true
    },
    TotalOutcome:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Costs', costSchema);