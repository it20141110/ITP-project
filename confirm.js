const mongoose = require('mongoose');

const schema = mongoose.Schema;

const confSchema = new schema({
    Cname : {
        type : String,
        required : true //validate part
    },
    address: {
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

const confirm = mongoose.model("Confirmation",confSchema);

module.exports = confirm;