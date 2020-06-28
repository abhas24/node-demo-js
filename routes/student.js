let express = require('express');
let router = express.Router();
const  student = require('../models/student');

var studentController = require('../controllers/StudentController.js');

router.get('/students', studentController.addNewStudent);
/*router.get('/students',(req,res)=>{
	student.create({
		name:'AnuragB',
		class:8,
		roll_no:9,
		section:'A',
		status:1
	});
	res.send('You have requested student');
});*/

module.exports = router;