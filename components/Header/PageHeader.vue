<template>
  <div>
    <div class="page_head">
      <ButtonPrev />
      <p class="title">
        {{ pageHeaderTitle }}
      </p>
    </div>
  </div>
</template>

<script>
import ButtonPrev from "../../components/button/buttonPrev.vue";

export default {
  name: "PageHeader",
  components: {
    ButtonPrev,
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
