const mysql = require('mysql')
// 创建数据库连接
const db =  mysql.createPool({
  host:'127.0.0.1',
  user:'root',
  password:'admin123',
  database:'my_db_03'
})
module.exports=db