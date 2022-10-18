<template>
    <header id="header">
        <div class="inner">
            <h1 class="logo"><a href="">logo</a></h1>            
            <div class="button_container">
                <ButtonIcon class="icon ic_search black"/>
                <ButtonIcon class="icon ic_share grey"/>                
            </div>
        </div>
    </header>
</template>

<script>
import ButtonIcon from '../button/buttonIcon.vue';

export default {
    name: "MainHeader",
    components: { 
        ButtonIcon
    },
};
</script>

<style lang="scss" scoped>
    #header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 50px;
        background: #ffffff;

        .inner {
            display: flex;
            align-items: center;
            position: relative;
            width: 100%;
            height: 100%;
            padding: 0 16px;
        }
        .button_container {
            display: flex;
            align-content: center;
            justify-content: center;
            margin-left: auto;
        }
    }
</style>
