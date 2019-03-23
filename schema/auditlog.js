/**
 * New schema for Audit log for saving data in MongoDb
 */
var mongoose = require('mongoose');
mongoose.set('debug', true);

// define the schema for our user model

var auditlogSchema = mongoose.Schema({
    auditlogId: Number,
    action_msg: String,
    action_type: String,
    // company_id_fk: Number,
    mname : String,
    smname : String,
    sname : String,
    createdBy: {
        id: Number,
        name: String
    },
    ctime: Date,
}, {versionKey: false});


module.exports = mongoose.model('auditlog', auditlogSchema, 'auditlog');