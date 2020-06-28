const  student = require('../models/student');
const StudentRepository = require('../repositories/StudentRepository');
var studentVar = {};
/**addPost API
method:POST
input:body[title, type, category_id, subcategory_id, message, send_to], headers[x-access-token]
output:data,
purpose:To add posts.
*/
/**
     * To add posts with respect to `title`, `type`, `category_id`, `subcategory_id`, `message`, `send_to` and `x-access-token`
     * @param {Number} `category_id`, `subcategory_id`, `` 
     * @param {String} `send_to`, `message`, `type`, `title`, `x-access-token` 
     * @return {User} result
*/
studentVar.addNewStudent = function(req, res, next){
  console.log('Student Controller');
  StudentRepository.createData({test:'anurag'});
  return res.send({status:-1, msg:'Something went wrong'});
}

module.exports = studentVar;