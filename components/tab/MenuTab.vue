<template>
    <div>
        <div class="scroll-x-tab-wrap">
            <ul class="scroll-x-tab">
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
            <div class="tab-underBar"></div>
        </div>
    </div>
</template>


<script>
export default {
    name: "MenuTab",

};
</script>

<style lang="scss" scoped>
.scroll-x-tab-wrap {
    overflow: hidden;
    position: relative;
    width: 100%;
    .scroll-x-tab {
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
    .tab-underBar {
        position: relative;
        width: 10%;
        height: 2px;
        border-radius: 50px;
        background: #333;
    }
}
</style>