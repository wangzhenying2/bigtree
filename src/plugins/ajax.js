import axios from 'axios'
import { Message } from 'element-ui'

const methods = ['post', 'get', 'delete']
const Ajax = {}

methods.forEach((method) => {
    Ajax[method] = function(url, pms, callback = () => {}, ops) {

        // 代理需要：先加上前缀，然后在 config/proxy.config.js 代理时去掉
        // if (url.indexOf('/authApi') === 0) {
        //     axios.defaults.baseURL = ''
        // }
        // if (url.indexOf('/mng') === 0) {
        //     axios.defaults.baseURL = '/contract'
        // }
        // if (url.indexOf('/fund') === 0) {
        //     axios.defaults.baseURL = '/fundApi'
        // }
        const request = method === 'get' ? axios.get(url, { params: pms })
            : method === 'post' ? axios.post(url, pms, ops)
                : axios.delete(url, { data: pms })

        request.then((response) => {
            if (response.data.success) {
                callback(response.data.result)
            } else {
                Message.error(response.data.msg || '系统繁忙')
            }
        }).catch((error) => {
            Message.error(error)
        })
    }
})

export default {
    install(Vue) {
        Vue.ajax = Ajax
        Vue.prototype.$ajax = Ajax
    }
}