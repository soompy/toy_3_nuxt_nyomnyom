<template>
    <div class="navigator-container">
        <ul class="navigator">
            <li>
                <a href="">
                    <i class="icon"></i>
                    <p>홈</p>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="icon"></i>
                    <p>홈</p>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="icon"></i>
                    <p>홈</p>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="icon"></i>
                    <p>마이페이지</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "BottomNavigator",
    
};
</script>

<style lang="scss" scoped>
.navigator-container {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: #ffffff;
    .navigator {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        width: 100%;
        height: 100%;
        li {
            flex: 1;
            height: 100%;
            a {                
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                width: 100%;
                height: 100%;
                padding: 0 4px;
                .icon {
                    width: 20px;
                    height: 20px;
                }
                p {
                    font-size: 12px;
                    margin-top: 2px;
                }
            }
        }
    }
}
</style>