<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Header from '@/components/layout/header.vue'
import Footer from '@/components/layout/footer.vue'
const router = useRouter()
const locale = ref()

const { locale: localeLanguage } = useI18n()

const changeLang = (lang: any) => {
  locale.value = lang
  localeLanguage.value = lang.name
}

</script>

<template>
  <el-config-provider :locale="locale">
    <Header @changeLang="changeLang" />
    <router-view />
    <Footer />
  </el-config-provider>
</template>

<style lang="scss">
</style>
