/**
 *  1.下载安装mongoose
 *      npm i mongoose --save
 *  2.在项目中引入mongooses
 *      const mongoose = require(”mongoose“);
 *  3.连接mongoDB数据库
 *      mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
 *  4.断开数据库的连接（一般不需要使用）
 *      mongoose数据库一般情况下只需要连接一次，除非项目停止服务器关闭，否则一般不会断开
 *      mongoose.disconnect();
 * 
 * 
 *      监听mongoDB数据库的连接状态
 *      在mongoose对象中，有一个属性叫做connection，该对象表示的就是数据库连接
 *      通过监视该对象的状态，可以来监听数据库的连接与断开
 *  
 *      数据库连接成功的事件
 *      mongoose.connection.once("open",function(){
 * 
 *      });
 *      数据库断开的事件
 *      mongoose.connection.once("close",function(){
 * 
 *      });
 */


//引入
const mongoose = require("mongoose");

//连接数据库
mongoose.connect("mongodb://127.0.0.1:27017/test");

//监听数据库连接事件
mongoose.connection.once('open',function () {
    console.log('数据库连接成功');
});

//断开数据库
mongoose.disconnect();

//监听数据库顿开事件
mongoose.connection.once('close',function () {
    console.log('数据库已经断开');
});

