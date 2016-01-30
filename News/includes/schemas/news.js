module.exports.model_news = function (mongoose) {
    /* Define the Table Schema
     * */
    var ObjectSchema = new mongoose.Schema({
        'title': mongoose.Schema.Types.Mixed,
        'image': mongoose.Schema.Types.Mixed,
        'url': mongoose.Schema.Types.Mixed,
        'published': mongoose.Schema.Types.Mixed,
        'updated': mongoose.Schema.Types.Mixed,
        'category': mongoose.Schema.Types.Mixed,
        'label': mongoose.Schema.Types.Mixed,
        'description': mongoose.Schema.Types.Mixed,
        'author': mongoose.Schema.Types.Mixed
    });
    return ObjectSchema;
};