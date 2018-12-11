import Vue from 'vue'
import App from './App'
var FLY=require('flyio/dist/npm/wx');
var fly=new FLY;

Vue.prototype.$http = fly //将fly实例挂在vue原型上
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
