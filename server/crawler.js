// 建立在http上的插件
const request = require('request')
const query = require('./tools/db.js')
// 定时任务
// const schedule = require('node-schedule')
// 像jQuery一样访问dom
const cheerio = require('cheerio')

// 配置每个网站抓取的传参及回调数据的组装
let setting = {
    // 'juejin': {
    //     opt: {
    //         url: 'https://web-api.juejin.im/query',
    //         method: 'post',
    //         headers: {
    //             'content-type': 'application/json',
    //             'X-Agent': 'Juejin/Web'
    //         },
    //         body: JSON.stringify({
    //             extensions: {
    //                 query: {id: "653b587c5c7c8a00ddf67fc66f989d42"}
    //             },
    //             variables: {
    //                 after: '',
    //                 first: 50,
    //                 category: "5562b415e4b00c57d9b94ac8",
    //                 order: 'NEWEST'
    //             }
    //         })
    //     },
    //     package: body => {
    //         // 掘金组装数据
    //         var list = JSON.parse(body).data.articleFeed.items.edges
    //         return list.reduce((prev, cur) => {
    //             let node = cur.node
    //             prev.push([
    //                 node.title.replace(' ', ''),
    //                 node.tags[0]['title'],
    //                 node.user.username,
    //                 node.createdAt,
    //                 node.originalUrl,
    //                 'juejin'
    //             ])
    //             return prev
    //         }, [])
    //     }
    // },
    'denamore': {
        opt: {
            url: 'http://www.zjdnm.cn/products.asp'
        },
        package: (body, type, typeSec) => {
            const $ = cheerio.load(body)
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

// 存放数组数据
let arrData = []

function callback(type, type1, error, response, body) {
    if (!error && response.statusCode == 200) {
        new Promise((resolve, reject) => {
            if (arrData.length === 0) {
                // 每次抓取前清空表数据
                query('TRUNCATE prods', null, function(err, val, fields) {
                    if (err) { reject(err) }
                    resolve()
                });
            } else {
                resolve()
            }
        }).then(() => {
            if (type === 'denamore') {
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
    arrData = []
    Object.keys(setting).forEach(item => {
        let opt = setting[item]['opt']
        if (item === 'denamore') {
            let type = ['25', '26', '27']
            type.forEach(item1 => {
                request(opt.url + '?id=' + item1 + '&ex=', callback.bind(null, item, item1))
            })
        }
        
    })
        
    
}

module.exports = c