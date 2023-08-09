<template>
  <div>
    <div class="page_head">
      
      <p class="title">
        {{ pageHeaderTitle }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: "PageHeader",
  components: {

  },
  props: {
    pageHeaderTitle: {
      type: String,      
    }
  },
};
</script>

<style lang="scss" scoped>
.page_head {
  display: flex;
  align-content: center;
  position: relative;
  width: 100%;
  padding: 12px 10px;
  border-bottom: 1px solid #eeeeee;
  .title {
    margin: auto;
  }
}
</style>
