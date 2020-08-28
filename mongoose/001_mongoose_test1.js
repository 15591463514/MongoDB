//引用
const mongoose = require('mongoose');

//连接数据库
mongoose.connect('mongodb://127.0.0.1/test',{ useNewUrlParser: true });

//监听数据库是否连接成功
mongoose.connection.once('open',function () {
    console.log('数据库连接成功');
});

//将mongoose.schema赋值给变量
var Schema = mongoose.Schema;

//创建模式(schema)
var stuSchema = new Schema({
    name:String,
    age:Number,
    gender:{
        type:String,
        default:"male"
    },
    major:String,
    address:String
});


//通过schema来创建Model
//Model代表的是数据库中的集合，通过Model才能对数据库进行操作


var StuModel = mongoose.model("student",stuSchema);
//对student集合进行映射，使用stuSchema对集合进行约束

//向数据库中插入一个文档
StuModel.create(
    {
        name:"熊大",
        age:22,
        gender:"male",
        major:"护林员",
        address:"狗熊岭"
    },
    function(err){
        if(!err){
            console.log("插入成功~~~");
        }
    }
);