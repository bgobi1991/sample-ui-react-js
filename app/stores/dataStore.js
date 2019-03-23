var dataService = require("../services/dataService.js");
export const getresponse=(data, cb)=>{
    dataService.getresponse(data).then(function (res) {
        cb(res);
    });
}

