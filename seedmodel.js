const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const seedSchema = new Schema({
    id:{
        type:String,
        required:true
    },
    name:{
       type:String,
        required:true 
    },
    expDate:{
        type:Date,
        required:true
    },
    packDate:{
        type:Date,
        required:true
    },

    storageLevel:{
        type:String,
        required:true 
    },

    reorderLevel:{
        type:String,
        required:true 
    },

    storageDate:{
         type:Date,
        required:true
        
    },

    stckManager:{
        type:String,
        required:true
    }
})

const Seed = mongoose.model("Seed",seedSchema);

module.exports=Seed;