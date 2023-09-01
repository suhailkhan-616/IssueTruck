const express = require('express');
const router = express.Router();
const issueController = require('../controllers/issue_project');


router.get('/',issueController.issueTodo);
router.post('/',issueController.addissue);
router.get('/',issueController.show);


module.exports = router;