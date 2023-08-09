<template>
  <div>
    <h1 class="logo">뇸뇸</h1>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '../../components/widgets/form/LoginForm.vue';

export default {
  name: "LoginPage",
  components: {    
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
  .logo {    
    text-align: center;
  }
</style>