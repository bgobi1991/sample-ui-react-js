
var async = require('async');
var http = require('http');
errorCtrl = require('../controller/dataController.js'),


exports.getresponse = function(req, res) {
    var postData = req.body;
    var response = {"node":[{"title":"reporting node1","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-chart-bar","category":"reports","status":"1"},{"title":"servicing node2","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-random","category":"reports","status":"1"},{"title":"servicing node3","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-bath","category":"service","status":"1"},{"title":"misc node4","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-chart-bar","category":"others","status":"1"},{"title":"servicing node5","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-baby-carriage","category":"others","status":"1"},{"title":"servicing node6","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-random","category":"service","status":"1"},{"title":"misc node7","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-credit-card","category":"others","status":"1"},{"title":"servicing node8","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-cubes","category":"others","status":"1"},{"title":"servicing node9","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-dolly","category":"others","status":"1"},{"title":"servicing node10","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-briefcase","category":"others","status":"1"},{"title":"servicing node11","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-broadcast-tower","category":"others","status":"1"},{"title":"servicing node12","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-bed","category":"others","status":"1"}],"tree":[{"title":"reporting tree1","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-chart-bar","category":"reports","status":"1"},{"title":"servicing tree2","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-random","category":"reports","status":"1"},{"title":"servicing tree3","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-bath","category":"service","status":"1"},{"title":"misc tree4","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-chart-bar","category":"others","status":"1"},{"title":"servicing tree5","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-baby-carriage","category":"others","status":"1"},{"title":"servicing tree6","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-random","category":"service","status":"1"},{"title":"misc tree7","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-credit-card","category":"others","status":"1"},{"title":"servicing tree8","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-cubes","category":"others","status":"1"},{"title":"servicing tree9","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-dolly","category":"others","status":"1"},{"title":"servicing tree10","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-briefcase","category":"others","status":"1"},{"title":"servicing tree11","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-broadcast-tower","category":"others","status":"1"},{"title":"servicing tree12","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-bed","category":"others","status":"1"}],"set":[{"title":"reporting set1","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-chart-bar","category":"reports","status":"1"},{"title":"servicing set2","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-random","category":"reports","status":"1"},{"title":"servicing set3","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-bath","category":"service","status":"1"},{"title":"misc set4","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-chart-bar","category":"others","status":"1"},{"title":"servicing set5","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-baby-carriage","category":"others","status":"1"},{"title":"servicing set6","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-random","category":"service","status":"1"},{"title":"misc set7","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-credit-card","category":"others","status":"1"},{"title":"servicing set8","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-cubes","category":"others","status":"1"},{"title":"servicing set9","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-dolly","category":"others","status":"1"},{"title":"servicing set10","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-briefcase","category":"others","status":"1"},{"title":"servicing set11","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-broadcast-tower","category":"others","status":"1"},{"title":"servicing set12","desc":"Font Awesome is completely free for commercial use. Check out the page","icon":"fa-bed","category":"others","status":"1"}]};
    var resData = response[postData.key];
    results = resData;
    if(postData.query !="") {
        results = [];
        if(postData.searchconcept == "all") {
            for(var i=0; i<resData.length; i++) {
              for(key in resData[i]) {
                console.log(resData[i][key]);
                if(resData[i][key].toLowerCase().indexOf(postData.query.toLowerCase())!=-1) {
                  results.push(resData[i]);
                }
              }
            }
        } else {
            for(var i=0; i<resData.length; i++) {
              var qry = postData.query.toLowerCase();
              if(resData[i][postData.searchconcept].toLowerCase().indexOf(qry)!=-1) {
                  results.push(resData[i]);
              }
            }
        }
        
    }
    res.end(JSON.stringify(results));
};









