<template>
    <div class="input_field">
        <i class="icon ic_search black"></i>
        <input type="search" class="search_field" :placeholder="placeholderValue" >
    </div>
</template>

<script>
export default {
  name: "SearchField",  
  props: {
    placeholderValue: {
        type: String,
    }
  }
};
</script>

<style lang="scss" scoped>
.input_field {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    padding: 0 10px;
    .ic_search {
        width: 24px;
        height: 24px;
    }
    .search_field {
        position: relative;
        width: 100%;
        height: 100%;
        margin-left: 10px;
    }
}
</style>