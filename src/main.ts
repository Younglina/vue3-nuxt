import { createApp } from 'vue'
import { ElMessage } from 'element-plus'
import App from './App.vue'
import router from './router'
import 'element-plus/es/components/message/style/css'
import i18n from './language/i18n'
import 'uno.css'

const app = createApp(App)
app.use(router)
app.use(ElMessage)
app.use(i18n)
app.mount('#app')
