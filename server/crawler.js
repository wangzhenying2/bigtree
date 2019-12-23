// 建立在http上的插件
const request = require('request')
const query = require('./tools/db.js')
const iconv = require('iconv-lite')

// 定时任务
// const schedule = require('node-schedule')

// 像jQuery一样访问dom
const cheerio = require('cheerio')

// 配置每个网站抓取的传参及回调数据的组装
let setting = {
    'yrrbw': {
        opt: {
            url: 'http://www.yrrbw.com/ProductList.asp'
        },
        package: (body, type, typeSec) => {
            const $ = cheerio.load(body)
            let arr = []
            $('.proList img').each((i, item) => {
                arr.push([
                    type,
                    typeSec,
                    $(item).attr('alt'),
                    'http://www.yrrbw.com/' + $(item).attr('src'),
                ])
            })
            return arr
        }
    },
    'denamore': {
        opt: {
            url: 'http://www.zjdnm.cn/products.asp',
            encoding: null
        },
        package: (body, type, typeSec) => {
            const $ = cheerio.load(iconv.decode(body, 'gb2312'))
            let arr = []
            $('.about_con img').each((i, item) => {
                arr.push([
                    type,
                    typeSec,
                    $(item).attr('alt'),
                    'http://www.zjdnm.cn' + $(item).attr('src'),
                ])
            })
            return arr
        }
    }
}


function callback(type, type1, error, response, body) {
    if (!error && response.statusCode == 200) {
        new Promise((resolve, reject) => {
            // 存放数组数据
            let arrData = []
            if (type === 'denamore' || type === 'yrrbw') {
                arrData.push(...setting[type]['package'](body, type, type1))
            }
            // 插入表数据
            query('INSERT INTO prods(`type`,`typeSec`,`name`,`url`) VALUES ?', [arrData], function(err, val) {
                if (err){ Promise.reject(err) }
                console.log(`成功：${type}插入${val.affectedRows}条`)
            });
        }).catch( err => {
            console.log('错误：' + err)
        })
    }
}

let c = () => {
    // 定时任务
    // schedule.scheduleJob('0 0 0 * * *',()=>{})
 
    // 每次抓取前清空表数据
    query('TRUNCATE prods', null, function(err, val, fields) {
        if (err) {
            console.log('错误：' + err)
            return false
        }
        // 开始抓数据
        Object.keys(setting).forEach(item => {
            if (item === 'denamore') {
                let type = ['25', '26', '27']
                type.forEach(item1 => {
                    request({
                        ...setting[item]['opt'],
                        url: setting[item]['opt'].url + '?id=' + item1 + '&ex='
                    }, callback.bind(null, item, item1))
                })
            } else if (item === 'yrrbw') {
                let type = ['17', '18', '20', '22', '23', '24', '26', '27', '28', '30']
                type.forEach(item1 => {
                    request({
                        ...setting[item]['opt'],
                        url: setting[item]['opt'].url + '?SortID=' + item1
                    }, callback.bind(null, item, item1))
                })
            }
        })
    });
}

module.exports = c