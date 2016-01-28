module.exports.model_news = function (mongoose) {
    /* Define the Table Schema
     * */
    var ObjectSchema = new mongoose.Schema({
        'title': mongoose.Schema.Types.Mixed
    });
    return ObjectSchema;
};