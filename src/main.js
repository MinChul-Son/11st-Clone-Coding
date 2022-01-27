import { createApp } from 'vue'
import App from '~/App.vue'
import router from '~/routes'
import store from '~/store'
import fetch from '~/plugins/fetch'
import lazyLoad from '~/plugins/lazyLoad'
import search from '~/plugins/search'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(fetch)
app.use(lazyLoad)
app.use(search)
app.mount('#app')
