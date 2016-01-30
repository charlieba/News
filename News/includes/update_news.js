var params = require('./config_module.js');
var parseString = require('xml2js').parseString;
exports.execute_insert_news = function (request, req, res, mongoose, NewsSchema, md5) {
    var jsonInsert = {'title':'','image':'','url':'','published':'','updated':'','category':'','label':'','description':'','author':''};
    var modelNameNews = 'tbl_news';
    News = mongoose.model(modelNameNews, NewsSchema);
    request(params.app_conf('ES', 'BBC', 'TECNOLOGY'), function (error, response, body) {
        if (response.body != undefined) {
            var xml = response.body.toString();
            parseString(xml, function (err, result) {
                var json = result['feed'];
                jsonInsert['author'] = json['author'][0]['name'][0];
                jsonInsert['category'] = 'tecnology';
                for (var i in json['entry']) { 
                    console.log(json['entry'][i]['title'][0]['_']);
                }
            });
        }
 
    });
    
    
    function updateNews(jsonString) { 
        var keyID = '123456asdfsafssfsfsasfjdlasfjlkjsf12345678';
        News.update({
            '_id': params.generateID(keyID, mongoose, md5).toString()
        }, {
            'title': 'titulo',
            'image': 'imagen',
            'url': 'url',
            'published': 'published',
            'updated': 'updated',
            'category': 'category',
            'label': 'label',
            'description': 'description',
            'author': 'Carlos Giovani Barillas Colon'
        }, {
            upsert: true
        }, function (err, numberAffected, raw) {
            if (err)
                console.log("ERROR -> " + err);
        }      
        );
    } 
    res.writeHead(200, "OK", { 'Content-Type': 'application/json' });
    res.end('{}');
};