const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

// Models
const List = require('./models/List')
const Listed = require('./models/issue')

//Middlewear 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//Assets
app.use(express.static('./assets'));


//Setting layouts for use Style and Scripts file
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(expressLayouts);

// Setting views Engine Ejs
app.set('view engine','ejs');
app.set('views','./views');

//Routes 
app.use('/', require('./routes/home'));

app.listen(port,function(err){
    if(err){
        console.log('Error in the server port ',err);
    }
    console.log(`Successfull Server is start in :${port}`);
})