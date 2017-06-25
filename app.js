var userAgent  = require('express-useragent'),
    bodyParser = require('body-parser'),
    express    = require('express'),
    app        = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(userAgent.express());

app.get('/', function(req, res) {
   var languages = req.acceptsLanguages();
   var ipAddress = req.ip; 
   var software  = req.useragent;
   res.json({
       'ipAddress': ipAddress,
       'language': languages[0],
       'software': software.os + ' using ' + software.browser
   });
});


var port = process.env.PORT || 3000;
app.listen(port);