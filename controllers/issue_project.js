const Listed =require("../models/issue");

module.exports.issueTodo = async function (req, res) {
    try {
        const Todoissue = await Listed.find();
        return res.render('project_page', {
            title: 'Project page |',
            listes: Todoissue
        });
    } catch (err) {
        console.log('Error in finding', err);
    }
}
module.exports.addissue = async function (req, res) {
    console.log('********************');
    try {
        const List_item = await Listed.create({
            title: req.body.title,
            descrip: req.body.descrip,
            bug: req.body.bug,
            ui: req.body.ui,
            doc: req.body.doc,
            dub: req.body.dub,
            author: req.body.author
        });
        console.log(req.body);
        return res.redirect('issue');
    } catch (err) {
        console.log('Error in user', err);
    }
    console.log('User is running');
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