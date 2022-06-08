<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '@/components/layout/header.vue'
const router = useRouter()
const locale = ref()

const { locale: localeLanguage } = useI18n()

const changeLang = (lang: any) => {
  locale.value = lang
  localeLanguage.value = lang.name
  saveLanguage(lang)
}

function saveLanguage(lang: any) {
}
</script>

<template>
  <el-config-provider :locale="locale">
    <Header @changeLang="changeLang" />
    <router-view />
  </el-config-provider>
</template>

<style lang="scss">
</style>
