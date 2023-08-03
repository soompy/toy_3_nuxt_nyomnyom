<template>
    <div>
      <form class="login-form" @submit.prevent="login">
        <div class="form-box">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" required>
        </div>        
        
        <div class="form-box">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" required> 
        </div>              
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
<script>
  export default {
    name: "LoginForm",

    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {        
        console.log('Logging in with:', this.username, this.password);
      }
    },
  };
</script>
  
<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column !important;
  padding: 20px;

  .form-box {
    display: flex;
    align-content: center;
    flex-direction: column;
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