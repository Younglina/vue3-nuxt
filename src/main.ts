import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'

const app = createApp(App)
app.use(router)
app.use(ElMessage)
app.mount('#app')
