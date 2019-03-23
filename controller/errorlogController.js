var connection = require('../connection');
var async = require('async');

exports.addErrorlog = function (errlog ) {
    console.log(errlog);
    var return_data = {};
    var insertQry = "INSERT INTO t_error_logs SET ?, created_by=NOW() ";
    insertFields = {
         methodname : errlog.methodName,
         modulename : errlog.moduleName  
    }
    connection.vob(insertQry,insertFields, function(err) {
         return_data.status = "error";
       // send(JSON.stringify(results));
    });
    // adderrorlog.save(function (err, resObj) {
        //if (err) return res.end(JSON.stringify(err));
        //res.end(JSON.stringify(resObj));
    // });
 }