const mongoose = require('mongoose');

const schema2 = mongoose.Schema;

const deliSchema = new schema2({
    
    Dname: {
        type : String,
        required : true //validate part
    },
    status: {
        type : String,
        required : true //validate part
    },
    Shipaddress: {
        type : String,
        required : true //validate part
    },

    Billaddress: {
        type : String,
        required : true //validate part
    },
    phone: {
        type : String,
        required : true //validate part
    },
    method: {
        type : String,
        required : true //validate part
    },
     date:{
        type : String,
        required : true //validate part
    }

})

const delivery = mongoose.model("Delivery",deliSchema);

module.exports = delivery;