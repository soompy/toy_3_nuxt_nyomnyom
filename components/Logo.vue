<template>
    <h1 class="logo">
        <router-link to="/">
            <span><img src="../assets/images/logo.png" alt="로고"></span>
        </router-link>        
    </h1>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
.logo {    
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    span {       
        overflow: hidden;
        display: block; 
        font-size: 0.8rem;
        line-height: 1.2rem;
        color: #F5F5F5;
        border-radius: 0.8rem;
    }
}
</style>