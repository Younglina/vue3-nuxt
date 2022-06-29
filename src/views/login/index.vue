<template lang="">
  <div class="login-form">
    <img src="@/assets/images/netease-music.png" w-100px>
    <h2>登录网易云音乐账号</h2>
    <el-input
      v-model="phone" placeholder="手机号"
    >
      <template #prepend>
        <div
          class="i-mdi-cellphone"
        />
      </template>
    </el-input>
    <el-input
      v-model="password"
      type="password"
      placeholder="密码"
      show-password
    >
      <template #prepend>
        <div
          class="i-mdi-lock"
        />
      </template>
    </el-input>
    <el-button style="width: 100%;" @click="doLogin">
      登录
    </el-button>
    <div border-t-1 p-t-10px m-t-40px text-gray text-12px text-left>
      该网站 承诺不会保存你的任何账号信息到云端。<br>
      你的密码会在本地进行 MD5 加密后再传输到网易云 API。<br>
      该网站 并非网易云官方网站，输入账号信息前请慎重考虑。 你也可以前往 该网站 的 GitHub 源代码仓库 自行构建并使用自托管的网易云 API。
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const phone = ref('')
const password = ref('')

const doLogin = () => {
  console.log(phone.value, password.value)
  //  loginWithPhone({
  //   phone: phone.value,
  //   password: md5(password.value).toString(),
  //   })
  //   .then(this.handleLoginResponse)
  //   .catch(error => {
  //     nativeAlert(`发生错误，请检查你的账号密码是否正确\n${error}`);
  //   });
}

</script>
<style lang="scss" scoped>
.login-form {
  width: 300px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;

  .el-input {
    margin-bottom: 20px;
  }
}
</style>
