/**
 * 数据库设计
 */

const mongoose = require('mongoose');

 //用户详情
const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

//创建表
const user = mongoose.model('user', userSchema);

//导出用户表，方便其他模块进行增删改查操作
module.exports = {user};