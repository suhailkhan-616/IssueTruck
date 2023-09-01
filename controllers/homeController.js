const List = require("../models/List");
module.exports.home = async function (req, res) {
    try {
        const TodoList = await List.find();
        return res.render('home', {
            title: 'Home |',
            list: TodoList
        });
    } catch (err) {
        console.log('Error in finding', err);
    }
}
module.exports.show = async function(req,res){
    try {
        // const TodoList = await List.find();
        return res.render('project_page', {
            title: 'Project_page |',
        });
    } catch (err) {
        console.log('Error in finding', err);
    }
}
 module.exports.Project =async function (req, res) {
        try {
            const TodoList = await List.find();
            return res.render('project', {
                title: 'Project |',
                list:TodoList
            });
        } catch (err) {
            console.log('Error in finding', err);
        }
    }
    

module.exports.addList = async function (req, res) {
    try {
        const List_item = await List.create({
            name: req.body.name,
            desc: req.body.desc,
            auth: req.body.auth
        })

        console.log(req.body);
        return res.redirect('/');
    } catch (err) {
        console.log('Error in user', err);
    }
    console.log('User is running');
}

module.exports.deleteList = async function(req,res){
    try{
        let id = req.query.id;
    
        await List.findByIdAndDelete(id);
    
        return res.redirect('back');

    }catch(err){
        console.log('Error in delete function',err);
    }
}