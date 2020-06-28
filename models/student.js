// models/userModel.js
const mongoose = require("../config/database");
const schema = {
	name:String,
	class:Number,
	roll_no:Number,
	section:String,
	status:Boolean
};
const studentScheme = new mongoose.Schema(schema)
const Student = mongoose.model('Student',studentScheme);
/*async function createStudent(){
	const student = new Student({
		name:'Anurag',
		class:9,
		roll_no:9,
		section:'B',
		status:1
	});

	const result = await student.save();
	console.log(result);
}*/

module.exports = Student;