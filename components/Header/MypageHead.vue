<template>
    <div>
        <div class="mypage_head">
            {{ mypageHeadTitle }}            
        </div>
    </div>
</template>

<script>
export default {
    name: "MypageHead",
    data() {
        return {
            mypageHeadTitle: '',
        }
    },
    props: {
        mypageHeadTitle: String,
    },
};
</script>

<style lang="scss" scoped>
</style>