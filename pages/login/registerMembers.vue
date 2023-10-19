<template>
    <div class="flex flex-col items-center justify-center">
        <h2 class="text-xl font-bold">계정 등록</h2>
        <div class="container">
            <form class="login-form" @submit.prevent="login">
                <div class="form-box" :class="{ active: isUsernameFocused }">
                    <div class="input-box">
                        <label for="username">Username:</label>
                        <input type="text" id="username" placeholder="아이디 입력(최대 10자)" v-model="username" required @focus="isUsernameFocused = true" @blur="isUsernameFocused = false" />
                    </div>
                    <p class="case-text" :class="{ 'error-text': !isUsernameValid }">{{ isUsernameValid ? usernameValidationMessage : 'ID는 최대 10자까지 가능합니다.' }}</p>
                </div>

                <div class="form-box mt-4" :class="{ active: isPasswordFocused }">
                    <div class="input-box">
                        <label for="password">Password:</label>
                        <input type="password" id="password" placeholder="비밀번호 입력(8-20자, 문자, 숫자, 특수문자 포함)" v-model="password" required @focus="isPasswordFocused = true" @blur="isPasswordFocused = false" />
                    </div>
                    <p class="case-text" :class="{ 'error-text': !isPasswordValid && isPasswordFocused }">
                        {{ isPasswordFocused && !isPasswordValid ? passwordValidationMessage : '' }}
                    </p>
                </div>

                <div class="form-box mt-4" :class="{ active: isConfirmPasswordFocused }">
                    <div class="input-box">
                        <label for="password">Confirm Password:</label>
                        <input type="password" id="confirmPassword" placeholder="비밀번호 재입력" v-model="confirmPassword" required @focus="isConfirmPasswordFocused = true" @blur="isConfirmPasswordFocused = false" />
                    </div>
                    <p class="case-text" :class="{ 'error-text': !isConfirmPasswordValid && isConfirmPasswordFocused }">
                        {{ isConfirmPasswordFocused && !isConfirmPasswordValid ? confirmPasswordValidationMessage : '' }}
                    </p>
                </div>
                
                <ButtonCp
                    class="btn login mt-16"
                    :class="{ active: isButtonEnabled }"
                    label="Sign up"
                    :width="'full'"
                    :height="50"
                    textColor="white"
                    :is-enabled="isButtonEnabled"
                    @click="handleButtonClick"
                />
            </form>
        </div>
    </div>
</template>
  
<script>
import ButtonCp from '../../components/button/ButtonCp.vue';

export default {
    name: "RegisterMembers",
    components: {
        ButtonCp,  
    },
    data() {
        return {
            username: '',
            password: '',
            confirmPassword: '',
            isUsernameFocused: false,
            isPasswordFocused: false,
            isConfirmPasswordFocused: false,
            usernameValidationMessage: '', 
            passwordValidationMessage: '비밀번호는 영어 대소문자, 특수문자, 숫자를 모두 포함해야 합니다.',
            confirmPasswordValidationMessage: '비밀번호가 다릅니다.',
        }
    },
    computed: {
        isUsernameValid() {
            return this.username.length <= 10;
        },        
        isPasswordValid() {
            const isValidLength = this.password.length >= 8 && this.password.length <= 20;
            const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
            const isValidFormat = passwordRegex.test(this.password);

            if (!isValidLength) {
                this.passwordValidationMessage = "비밀번호는 8~20자 내로 입력해주세요.";
            } else if (!isValidFormat) {
                this.passwordValidationMessage = "비밀번호는 영어 대소문자, 특수문자, 숫자를 모두 포함해야 합니다.";
            } else {
                this.passwordValidationMessage = "비밀번호가 유효합니다.";
            }

            return isValidLength && isValidFormat;
        },
        isConfirmPasswordValid() {
            return this.confirmPassword === this.password;
        },
        isButtonEnabled() {
            return this.isUsernameValid && this.isPasswordValid && this.isConfirmPasswordValid;
        }
    },
    methods: {
        handleButtonClick() {
            this.$router.push('/login/loginPage');
        },
    },
};
</script>
  
<style lang="scss" scoped>

</style>
  