import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
import config from '@/config'

import './index.less'
import '@/assets/icons/iconfont.css'

if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView)

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
