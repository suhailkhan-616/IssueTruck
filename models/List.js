const mongoose = require('mongoose');

const ListScheema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    desc:{
        type: String,
        required:true
    },
    auth:{
        type:String,
        required:true
    }
});

const List = mongoose.model('List',ListScheema);

module.exports = List;