var http = require('http');
var md5 = require('MD5');
var mongoose = require("mongoose");
//var port = process.env.port || 3021;
var uristring ='mongodb://localhost/db_news';
var options = {
    db: { native_parser: true },
    server: { poolSize: 5, socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: {}
};
var db = mongoose.connection;
db.on('connecting', function () {
    console.log('connecting to MongoDB...');
});
db.on('error', function (error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});
db.on('connected', function () {
    console.log('MongoDB connected!');
});
db.once('open', function () {
    console.log('MongoDB connection opened!');
});
db.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});
db.on('disconnected', function () {
    console.log('MongoDB disconnected!');
});
mongoose.connect(uristring, options);


var news_model = require('./includes/schemas/news.js');
var NewsSchema = news_model.model_news(mongoose);

http.createServer(function (req, res) {
    if (req.method == 'GET') {
        var body = '';
        var parametros = req.url.split('?');
        switch (parametros[0]) {
            case '/update_news':{
                var update_news = require('./includes/update_news.js');
                update_news.execute_insert_news(req, res, mongoose, NewsSchema,md5);  
            }
        }
    }
    res.writeHead(404, "Not found", { 'Content-Type': 'text/html' });
    res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
}).listen(80);