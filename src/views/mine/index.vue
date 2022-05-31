<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log(route.query)
</script>

<template>
  个人中心
  <el-button>123</el-button>
  <button @click="router.push({ path: '/home' })">
    跳转到首页
  </button>
</template>

<style>
</style>
