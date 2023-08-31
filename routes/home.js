const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/homeController')

router.get('/',homeControllers.home);
router.get('/delete',homeControllers.deleteList);
router.post('/item',homeControllers.addList);
router.get('/user',homeControllers.Project);
router.use('/issue',require('./issue'));

module.exports = router;