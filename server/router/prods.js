const express = require('express')
const router = express.Router()
const query = require('../tools/db.js')


// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })



// 获取产品
router.post('/get', function (req, res) {
    let sql = 'SELECT * FROM prods where type="' + req.body.type + '"';
    query(sql, null, function(err, rows, fields) {
        if (err) { 
            res.send({
                success: false,
                msg: err || '操作失败！'
            })
        } else {
            res.send({
                success: true,
                result: rows
            })
        }
        res.end()
    });
});

module.exports = router