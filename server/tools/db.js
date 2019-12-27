/**
 * Created by wzy on 2019/11/12.
 */
const mysql = require("mysql");
//创建数据库(连接池)
const pool = mysql.createPool({
    host: '47.240.75.49',
    user: 'root',
    password: 'Wzy-159753',
    database: 'bigtree',
    charset: 'utf8mb4'
});
/*封装数据库操作方法query--用于增删改查*/
const query=function(sql,sqlParams,callback){
  //获取数据库的连接
    pool.getConnection(function(err,conn){
        if(err){
            //错误回调
            callback(err, null, null);
        }else{
            //连接成功的情况
            conn.query(sql, sqlParams, function(qerr, vals, fields){
                //释放连接
                conn.release();
                //事件驱动回调
                if (qerr) {
                    console.log('错误：' + err.sqlMessage)
                }
                callback(qerr, vals, fields);
            });
        }
    });
};
/*模块输出*/
module.exports = query;

