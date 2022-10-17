<template>
    <header id="header">
        <div class="inner">
            <h1 class="logo"><a href="">logo</a></h1>
            <nav>
                <div class="nav_bar">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <!-- nav_bar 클릭 시 gnb에 on 클래스 추가 -->
                <ul class="gnb">
                    <li><a href="">1</a></li>
                    <li><a href="">2</a></li>
                    <li><a href="">3</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "MainHeader",
    data: {
        
    },
    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
#header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background: #ffffff;

    .inner {
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
        padding: 10px 16px;
    }

    nav {
        position: relative;
        width: 22px;
        height: 22px;
        margin-left: auto;

        .nav_bar {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            position: relative;
            width: 100%;
            height: 100%;

            .bar {
                display: inline-block;
                width: 100%;
                height: 2px;
                background: #333333;
                border-radius: 16px;
            }
        }

        .gnb {
            display: none;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            background: #ffffff;
            li {
                padding: 8px 16px;
                border-bottom: 1px solid #cccccc;                
            }
            &.on {
                display: block;
            }
        }
    }
}
</style>
