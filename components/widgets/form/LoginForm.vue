<template>
  <div class="container">
    <form class="login-form" @submit.prevent="login">
      <div class="form-box" :class="{ active: isUsernameFocused }">
        <div class="input-box">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model.trim="username" @focus="isUsernameFocused = true" @blur="isUsernameFocused = false" />
        </div>        
        <p class="case-text" :class="{ 'error-text': !isUsernameValid }">
          {{ usernameValidationMessage }}
        </p>
      </div>

      <div class="form-box mt-4" :class="{ active: isPasswordFocused }">
        <div class="input-box">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model.trim="password" @focus="isPasswordFocused = true" @blur="isPasswordFocused = false" />
        </div>                
        <p class="case-text" :class="{ 'error-text': !isPasswordValid }">
          {{ passwordValidationMessage }}
        </p>
      </div>

      <div class="toast-box" v-if="showToast">        
        {{ toastMessage }}
      </div>      
      
      <ButtonCp
        class="btn login active mt-10"        
        label="Login"
        :width="'full'"
        :height="50"
        textColor="white"
        @click="handleButtonClick"
      />
    </form>
  </div>
</template>

<script>
import ButtonCp from "../../button/ButtonCp";

export default {
  name: "LoginForm",

  data() {
    return {
      username: '',
      password: '',
      showToast: false,
      toastMessage: '',      
      isUsernameFocused: false,
      isPasswordFocused: false,
      isUsernameValid: false,
      isPasswordValid: false,
      usernameValidationMessage: '',
      passwordValidationMessage: '',
      users: [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
      ],
    };
  },
  components: {
    ButtonCp,
  }, 
  computed: {      
      isUserValid() {
        return this.isUsernameValid && this.isPasswordValid;
      },
  },
  methods: {
    login() {
      console.log("Logging in with:", this.username, this.password);
    },
    handleButtonClick() {
      if (this.username.trim() === '') {
        this.usernameValidationMessage = "아이디를 입력해주세요.";
        this.isUsernameValid = false;
        return;
      } else {
        this.usernameValidationMessage = "";
        this.isUsernameValid = true;
      }

      if (this.password.trim() === '') {
        this.passwordValidationMessage = "비밀번호를 입력해주세요.";        
        this.isPasswordValid = false;
        return;
      } else {
        this.passwordValidationMessage = "";        
        this.isPasswordValid = true;
      }

      if (this.checkCredentials()) {
        this.login();        
        this.$router.push('/');
      } else {
        this.showToast = true;
        this.toastMessage = "아이디와 비밀번호가 일치하지 않습니다.";
        setTimeout(() => {
          this.showToast = false;
          this.toastMessage = "";
        }, 3000);
      }
    },       

    checkCredentials() {
        const users = [
            { username: "user1", password: "password1" },
            { username: "user2", password: "password2" },
        ];

        const matchedUser = users.find(user => user.username === this.username && user.password === this.password);

        return !!matchedUser;
    },    
  },
};
</script>

<style lang="scss" scoped>
.toast-box {
  position: fixed;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
  width: max-content;
  background: #333333;
  color: #ffffff;
  padding: 8px 16px;
  font-size: 13px;
  text-align: center;
  border-radius: 10px;
}
</style>