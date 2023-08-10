<template>
    <div class="menu-card">
        <div class="card-item">
            <i class="icon w-8 h-8">아이콘</i>
            <span class="item-name">아이템명</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "MenuCard",
};
</script>


<style lang="scss" scoped>
.menu-card {
    display: grid;
    grid-template: 1fr 1fr 1fr;
    grid-row: 3;
    grid-column: 3;
    .card-item {
        .icon {
            background: #ccc;
        }
        .item-name {
            font-size: 12px;
        }
    }
}
</style>