const express = require('express')
const router = express.Router()
const query = require('./db.js')

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })

// 获取信息
/*查询*/
router.post('/', function (req, res) {
    let curPage = req.body.curPage;
    let pSize = req.body.pSize;
    let start = curPage*pSize;
    let end = (curPage + 1)*pSize;
    let sql = 'SELECT * FROM arts where type="' + req.body.type + '" LIMIT ' + start + ',' + end;
    let countSql = 'SELECT COUNT(id) FROM arts where type="' + req.body.type + '"';
    new Promise((resolve, reject) => {
        query(countSql, null, function (err, rows, fields) {
            if (err) { reject(err) }
            resolve(rows)
        })
    }).then(count => {
        query(sql,null, function(err, rows, fields) {
            if (err){ Promise.reject(err) }
            let json = {
                success: true,
                result: {
                    list: rows,
                    total: count[0]["COUNT(id)"]
                }
            }

            res.send(json)
            res.end()
        });
    }).catch( err => {
        res.send({
            success: false,
            msg: err.sqlMessage || '操作失败！'
        })
        console.log('错误：' + err.sqlMessage)
    });
});
  
module.exports = router