var params = require('./config_module.js');
exports.execute_insert_news = function (req,res, mongoose, NewsSchema, md5) {
    var modelNameNews = 'tbl_news';
    News = mongoose.model(modelNameNews, NewsSchema);
    var keyID = '123456asdfsafssfsfsasfjdlasfjlkjsf12345678';
    News.update({
        '_id': params.generateID(keyID, mongoose, md5).toString()
    },{
        'title':'si funciona'
    }, {
        upsert: true
    }, function (err, numberAffected, raw) {
        if (err)
            console.log("ERROR -> "+ err);
    }      
    );
    
    res.writeHead(200, "OK", { 'Content-Type': 'application/json' });
    res.end('{}');
};