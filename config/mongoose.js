const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Issue_db_list');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Connection into Database:'));

db.once('open',function(){
    console.log('Successfull Connection into Database')
})

module.exports = db;