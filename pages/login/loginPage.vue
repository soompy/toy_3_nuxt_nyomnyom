<template>
  <div class="page-login">
    <Logo class="w-24 h-24" />
    <login-form></login-form>
  </div>
</template>

<script>
import Logo from "../../components/Logo.vue";
import LoginForm from "../../components/widgets/form/LoginForm.vue";

export default {
  name: "LoginPage",
  components: {
    Logo,
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
.page-login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  .logo {
    text-align: center;    
  }
}
</style>
