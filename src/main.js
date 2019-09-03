// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//导入全局样式、阿里图标
import '../static/css/global.css'
import '../static/font/iconfont'


//路由跳转后，页面回到顶部 /*在跳转之后判断*/
router.afterEach(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});  

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
