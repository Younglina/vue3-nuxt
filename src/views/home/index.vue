<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const open = () => {
  ElMessage('this is a message.')
}
</script>

<template>
  首页
  <el-button @click="open">
    asdf
  </el-button>
  <button @click="router.push({ path: '/mine', query: { id: 1 } })">
    跳转到个人中心页
  </button>
</template>

<style>
</style>
