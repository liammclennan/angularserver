var express = require('express'),
    resourceserver = require('resourceserver');

var app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.get('*', function (req,res) {
    res.render('index.html', function (err,html) {
        res.send(html);
    });
});


app.listen(3000);
resourceserver.listen(3001);
