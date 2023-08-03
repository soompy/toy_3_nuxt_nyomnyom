<template>
  <div>
    <h1>로그인</h1>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "../components/widgets/form/LoginForm.vue";

export default {
  name: Login,
  components: { LoginForm },
  data() {
    return {

    }
  },
};
</script>

<style lang="scss" scoped>

</style>
