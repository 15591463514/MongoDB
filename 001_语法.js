/*
    数据库和集合都不用手动创建
    在MongoDB中,如果文档所在的数据库和集合不存在,则会自动创建数据库和集合
*/

//显示当前的所有数据库
show dbs
//进入到指定的数据库
use test
//显示当前所处的数据库
db  
//显示所有的集合
show collections

/* 插入 */
//插入一行
db.students.insert({name:"高乐奇",age:35,gender:"男",profession:"教师"});
//插入多行
db.students.insert([
    {name:"卢鹏",age:21,gender:"男",profession:"自动化"},
    {name:"吴鹏",age:21,gender:"男",profession:"自动化"},
    {name:"任永鹏",age:21,gender:"男",profession:"自动化"}
]);
//与insert类似，还有两种方法用于插入
//db.students.insertOne();  只能插入一行
//db.students.insertMany(); 只能插入多行


/* 查询 */
//查询所有的文档
db.students.find();
//查询所有的文档，和上面的意思一样
db.students.find({});
//查询属性是指定值的文档
db.students.find({name:"卢鹏"});
db.students.find({age:22});
//满足多个条件，中间用逗号
db.students.find({age:21,name:"石淇升"});



