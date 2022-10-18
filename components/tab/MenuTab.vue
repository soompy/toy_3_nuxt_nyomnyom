<template>
    <div>
        <div class="scroll_x_tab_wrap">
            <ul class="scroll_x_tab">
                <li class="active"><span>m1</span></li>
                <li><span>m2</span></li>
                <li><span>mm1</span></li>
                <li><span>mmmm2</span></li>
                <li><span>mmm1</span></li>
                <li><span>m2</span></li>
                <li><span>mm1</span></li>
                <li><span>m2</span></li>
                <li><span>m1</span></li>
                <li><span>m2</span></li>
            </ul>
            <div class="tab_underBar"></div>
        </div>
    </div>
</template>


<script>
export default {
    name: "MenuTab",

};
</script>

<style lang="scss" scoped>
.scroll_x_tab_wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    .scroll_x_tab {
        overflow-x: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;        
        position: relative;
        width: 100%;        
        li {            
            flex-shrink: 0;
            span {
                display: block;
                padding: 10px 12px;
            }
            &.active {
                font-weight: bold;
            }
        }
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .tab_underBar {
        position: relative;
        width: 10%;
        height: 2px;
        border-radius: 50px;
        background: #333;
    }
}
</style>