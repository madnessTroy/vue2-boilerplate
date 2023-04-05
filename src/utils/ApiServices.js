import axios from 'axios'
import store from '@/store'

const BASE_URL = process.env.VUE_APP_API_HOST + '/' + process.env.VUE_APP_API_PREFIX
const TIMEOUT = 10000

const ApiInstance = axios.create({
    baseURL: BASE_URL
})

const ApiService = {
    getUserToken() {
        return store.getters['token']
    },
    get(path, params, obj = {}) {
        if (!obj.params) obj.params = params
        return ApiInstance.get(path, params)
    },

    post(path, data, obj) {
        if (typeof obj != 'object') obj = {}
        if (!obj.timeout) obj.timeout = TIMEOUT
        return ApiInstance.post(path, data, obj)
    },

    put(path, data, obj) {
        if (typeof obj != 'object') obj = {}
        if (!obj.timeout) obj.timeout = 30000
        return ApiInstance.put(path, data, obj)
    },

    delete(path, obj) {
        if (typeof obj != 'object') obj = {}
        if (!obj.timeout) obj.timeout = 30000
        return ApiInstance.delete(path, obj)
    }
}

/*
* Config request
* */
ApiInstance.interceptors.request.use(config => {
    if (!config.timeout) config.timeout = TIMEOUT
    const token = ApiService.getUserToken()

    if (token) config.headers['Authorization'] = `Bearer ${token}`

    return config
}, function (error) {
    // Do something with request error
    return Promise.reject(error)
})

/*
* Config response
* */
ApiInstance.interceptors.response.use(response => {
    return response
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
})

export default ApiService
