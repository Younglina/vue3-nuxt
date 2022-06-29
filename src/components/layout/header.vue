<template>
  <div class="header-common">
    <img class="logo" src="@/assets/images/layout/logo.jpg" alt="logo">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="orders">
        房屋订单中心
      </el-menu-item>
      <el-menu-item index="records">
        历史足迹
      </el-menu-item>
      <el-sub-menu index="lang">
        <template #title>
          国际化切换
        </template>
        <el-menu-item index="zh">
          中文
        </el-menu-item>
        <el-menu-item index="en">
          英文
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="avatar">
        <img class="avatar" src="@/assets/images/layout/avatar.jpeg" alt="我的">
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const emit = defineEmits<{
  (e: 'changeLang', lang: any): void
}>()

const activeIndex = ref('orders')
const handleSelect = (key: string) => {
  if (key === 'zh')
    emit('changeLang', zhCn)
  if (key === 'en')
    emit('changeLang', en)
}
</script>
<style lang="scss">
@import "@/assets/scss/layout/header.scss";
</style>
