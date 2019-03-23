 var promise = require("es6-promise");
import {serviceUrl} from "../config.js";

module.exports = {

 getresponse: function (params) {
    var Promise = promise.Promise;
    return new Promise(function (resolve, reject) {
            $.ajax({
                url: serviceUrl()+"getresponse",
                data: JSON.stringify(params),
                method: "POST",
                dataType: "json",
                contentType: "application/json",
                success: resolve,
                error: reject
            });
        });
    }
    
}