<template>
    <div class="edu-list-wrapper">
        <ul class="edu-list">
            <li class="edu-item">
                <span class="image-wrapper">
                    <img src="" alt="">
                </span>
                <div class="edu-box">
                    <h3 class="edu-title">{{ title }}</h3>
                    <p class="edu-text">{{ text }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "EduList",
    props: {
        // eduList: {
        //     type: Object,
        //     default: () => {
        //         return {
        //             title: "",
        //             text: "",
        //         };
        //     },            
        // },
        title: Object,
        text: Object,
    },
};
</script>

<style lang="scss" scoped>
.edu-list-wrapper {
    overflow-x: auto;
    position: relative;
    width: 100%;

    .edu-list {
        display: flex;
        align-content: center;
        position: relative;
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;

        .edu-item {
            width: 100%;
            box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
            background: #eee;
            margin-bottom: 10px;            

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>