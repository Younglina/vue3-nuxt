<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getRoomList } from '../../api'

const router = useRouter()

const open = () => {
  ElMessage('this is a message.')
}

const fetchRoomList = () => {
  const { data } = getRoomList()
  console.log(data)
}
fetchRoomList()

const value1 = ref('')

</script>

<template>
  首页
  {{ $t('message.home') }}
  <el-button @click="open">
    asdf
  </el-button>
  <button @click="router.push({ path: '/mine', query: { id: 1 } })">
    跳转到个人中心页
  </button>
  <div class="text">
    阿斯阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬阿斯蒂芬蒂芬
  </div>
  <el-date-picker v-model="value1" type="datetime" placeholder="Select date and time" />
</template>

<style lang="scss" scoped>
@import "@/assets/scss/home";

.text {
  @include line-overflow;
  width: 50px;
}
</style>
