const express = require('express');
const app = express();
// const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const msg = require('./msg')

app.use(bodyParser.json()); // 处理以json格式的提交
app.use(bodyParser.urlencoded({ extended: false })); // 处理以form表单的提交
app.use(express.static(path.resolve(__dirname, '../dist'))); // 访问静态资源

app.use('/msg', msg)

// 访问单页
// app.get('/', function (req, res) {
//     var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
//     res.send(html);
// });
// 监听
app.listen(3000, function () {
    console.log('success listen...3000');
});