var express = require('express'),
    resourceserver = require('resourceserver'),
    path = require('path'),
    shelljs = require('shelljs');

var app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.get('*', function (req,res) {
    res.render('index.html', {
        js: js
    }, function (err,html) {
        res.send(html);
    });
});

app.listen(3000);
resourceserver.listen(3001);

function js(dir) {
    var fs = [];
    shelljs.cd('public/');
    shelljs.find(dir).filter(function (f) {
        return f.match(/\.js$/);
    }).map(function (f) {
        fs.push('<script src="/' + f + '" ></script>');
    });
    return  fs.sort().join('\n');
}
