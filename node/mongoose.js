var mongoose = require('mongoose');
var url = "mongodb://localhost:27017/test";

mongoose.connect(url, () => console.log('连接成功'));// mongoose.disconnect(() => console.log("断开连接"))

var mySchema = new mongoose.Schema({
    title:  String,
    author: String,
    date: Date
});
// 回调钩子
mySchema.pre('save',  function(next) {
    if(!this.date) this.date = new Date()
    next()
})
// 静态方法
mySchema.statics.getLeoRows = function() {
    return this.find({author: 'leo'})
}
mySchema.methods.getTest = function() {
    return this.title + this.author
}
var MyModel = mongoose.model('MyModel', mySchema);

// 应用静态方法
// MyModel.getLeoRows().then(data => console.log(data))

// 新增
// var mymodel = new MyModel({
//     title: 'mongoose新增一行',
//     author: 'leo',
//     otherField: 1123123
// })
// console.log(mymodel.getTest())
// mongoose新增一行leo
// mymodel.save((error, data) => console.log(error, data))

// 查询
// MyModel.find({author: 'leo'}, 'author', (error, data) => console.log(data))
MyModel.findOne({author: 'leo'}).then(data => console.log(data))

// 更新
// MyModel.findOneAndUpdate({author: 'leo'}, {author: 'leoUpdate'}, (error, data) => console.log(error, data))

// 删除
// MyModel.findOneAndRemove({author: 'leo'}).then(data => console.log(data))

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});