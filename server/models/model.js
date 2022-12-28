const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        
    },
    email : {
        type: String,
        
        
    },
    gender : String,
    status : String
})

const User = mongoose.model('user', schema);

module.exports = User;