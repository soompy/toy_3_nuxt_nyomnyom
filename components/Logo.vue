<template>
    <h1 class="logo">
        <router-link to="/">
            <span>뇸뇸 <br> 그라운드</span>
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
        display: inline-block; 
        font-size: 0.8rem;
        line-height: 1.2rem;
        color: #F5F5F5;
    }
}
</style>