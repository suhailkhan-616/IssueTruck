const mongoose = require('mongoose');

const issueList = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    descrip:{
        type:String,
        required:true
    },
    bug:{
        type:String,
    },
    ui:{
        type:String,
    },
    doc:{
        type:String,
    },
    dub:{
        type:String,
    },
    author:{
        type:String,
    }
});

const Listed = mongoose.model('Listed',issueList);

module.exports = Listed