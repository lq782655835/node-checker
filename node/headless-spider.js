var page = require('webpage').create();
var url ='http://baidu.com'
page.open(url, function(status) {
  console.log("Status: " + status);
  var document1 = page.evaluate(function () { // dom操作
    return document.getElementById('kw').value
  });
  console.log('Page document is ' + JSON.stringify(document1));
//   if(status === "success") {
//     page.render('./snapshot/test1.png');
//   }
  phantom.exit();
});