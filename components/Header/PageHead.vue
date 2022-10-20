<template>
  <div>
    <div class="page_head">
        <ButtonPrev/>
      <!-- {{ mypageHeadTitle }} -->
    </div>
  </div>
</template>

<script>
import ButtonPrev from "../../components/button/buttonPrev.vue";

export default {
  name: "PageHead",
  components: {
    ButtonPrev,
  }
  // data() {
  //     return {
  //         mypageHeadTitle: '',
  //     }
  // },
  // props: {
  //     mypageHeadTitle: String,
  // },
};
</script>

<style lang="scss" scoped>
    .page_head {
        display: flex;
        align-content: center;
        position: relative;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid #cccccc;
    }
</style>
