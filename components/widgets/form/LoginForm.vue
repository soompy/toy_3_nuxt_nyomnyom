<template>
  <form class="login-form" @submit.prevent="login">
      <div class="form-box">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>

      <div class="form-box">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <Button
        class="btn primary mt-16"
        label="Login"     
        :width="'full'"
        :height="50"              
        textColor="white"
        :is-enabled="isButtonEnabled"
        @click="handleButtonClick"
      />
  </form>
</template>

<script>
import Button from "../../button/Button";

export default {
  name: "LoginForm",

  data() {
    return {
      username: "",
      password: "",
      isButtonEnabled: true,
    };
  },
  components: {
    Button,
  },
  methods: {
    login() {
      console.log("Logging in with:", this.username, this.password);
    },
    handleButtonClick() {
      console.log('Button Clicked!');
    },    
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;

  .form-box {
    display: flex;
    align-content: center;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid #ccc;

    label {
      font-size: 12px;
      margin-bottom: 8px;
    }

    input {
      position: relative;
    }
  }
}
</style>
