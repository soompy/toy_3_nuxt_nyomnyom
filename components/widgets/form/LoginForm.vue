<template>
  <div class="container">
    <form class="login-form" @submit.prevent="login">
      <div class="form-box">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
      </div>

      <div class="form-box mt-4">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>    

      <Button
        class="btn login primary mt-16"      
        :class="{ 'active': isButtonEnabled }"
        label="Login"
        :width="'full'"
        :height="50"            
        textColor="white"
        :is-enabled="isButtonEnabled"
        @click="handleButtonClick"
      />
    </form>

    <Modal v-if="showModal" @close="hideLoginConfirmationModal">
      <div>
        <h2>Login Confirmation</h2>
        <p>Are you sure you want to log in as {{ username }}?</p>
        <button class="btn confirm" @click="performLogin">뇸뇸</button>
        <button class="btn cancel" @click="hideLoginConfirmationModal">취소</button>
      </div>
    </Modal>
  </div>  
</template>

<script>
import Button from "../../button/Button";
import Modal from '../../Modal.vue';

export default {
  name: "LoginForm",

  data() {
    return {
      username: "",
      password: "",
      isButtonEnabled: false,
      showModal: false,
    };
  },
  components: {
    Button,
    Modal,
  },
  watch: {
    username(value) {
      this.updateButtonState();
    },
    password(value) {
      this.updateButtonState();
    },
  },
  methods: {
    login() {
      console.log("Logging in with:", this.username, this.password);
    },
    handleButtonClick() {
      console.log("Button Clicked!");
      this.showModal = true;
    },
    updateButtonState() {
      this.isButtonEnabled = this.username !== "" && this.password !== "";
    },
    showLoginConfirmationModal() {
      this.showModal = true;
    },
    hideLoginConfirmationModal() {
      this.showModal = false;
    },
    performLogin() {
      console.log("Logged in:", this.username);
      this.showModal = false;
      this.$router.push("/");
    },
  },
};
</script>


<style lang="scss" scoped>
.container {
  width: 100%;
}
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
