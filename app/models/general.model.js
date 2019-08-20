const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let General = new Schema({
    firstName:{
        type:String
    },

    lastName:{
        type:String
    },
    emailAddress:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    grossIncome:{
        type:String
    },
    goal:{
        type:String
    }

});

module.exports = mongoose.model('General', General);