module.exports.createData = function(data) {
	console.log(data);
    /*return new Promise(function(resolve, reject){
        sequelize.model(data.table).create(data.data).then(result=>{
            resolve(result);
        }).catch(err=>{
            console.log(199, err);
            reject(err);
        });
    })*/
};