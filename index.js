var express = require('express');
var app = express();

const bodyParser = require('body-parser');
/* support json encoded bodies */
app.use(bodyParser.json()); 
/* support encoded bodies */
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); 

global.appPath = __dirname;
console.log('APPLICATION LOCATION :', global.appPath);
//console.log('APPLICATION LOCATION :', process.env.PORT);

//Adding middleware
app.use((req,res,next) => {
	console.log('middleware');
	next();
})

let studentRoute = require('./routes/student');
app.use(studentRoute);

//handler for 404 page not found
app.use((req,res,next)=>{
	res.status(404).send('Page not found.');
})

//handler for 500 error
app.use((err,req,res,next)=>{
	res.status(500).send('something went wrong');
})

/*connecting to Database*/
require('./config/database');

const PORT = process.env.PORT || 3000;
app.listen(PORT, function (){
  console.log('Server has started on port', PORT);
});