const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const plantSchema = new Schema({
    id:{
        type:String,
        required:true
    },
    name:{
       type:String,
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
    },

    productId:{
        type:String,
        required:true

    }
})

const Plant = mongoose.model("Plant",plantSchema);

module.exports=Plant;