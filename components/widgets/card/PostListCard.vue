<template>
    <div class="post-card-list-wrapper">
        <ul class="post-card-list">
            <li class="post-card-item">
                <!-- <h3 class="post-title">{{ postCard.title }}</h3>
                <p class="post-text">{{ postCard.text }}</p> -->
                ㅇㅇㅇㅇ
                <span class="image-wrapper">
                    <img src="" alt="">
                </span>
            </li>
            <li class="post-card-item">
                <!-- <h3 class="post-title">{{ postCard.title }}</h3>
                <p class="post-text">{{ postCard.text }}</p> -->
                ㅇㅇㅇㅇ
                <span class="image-wrapper">
                    <img src="" alt="">
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "PostCard",
};
</script>

<style lang="scss" scoped>
.post-card-list-wrapper {
    overflow-x: auto;
    position: relative;
    width: 100%;    

    .post-card-list {
        display: flex;
        align-content: center;
        position: relative;
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;

        .post-card-item {            
            min-width: 80%;
            box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
            background: #eee;
            margin-right: 10px;

            .post-title {
                .post-text {}
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>