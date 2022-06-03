// 连接数据库
const mysql = require('mysql2');

// 创建连接对象
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootroot',
    database: 'db_cms'
});

module.exports = connection