<template>
  <header class="header">
      <Logo class="w-14 h-14" />
      
      <p class="page-title">
        {{ pageTitle }}
      </p>
      
  </header>
</template>

<script>
import Logo from "../../components/Logo.vue";

export default {
  name: "PageHeader",
  data() {
    return {
      pageTitle: "",
    }
  },
  components: {
    Logo,
  },
  props: {
    pageHeaderTitle: {
      type: String,      
      required: true,  
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-content: center;
  position: relative;
  width: 100%;
  padding: 12px 10px;
  border-bottom: 1px solid #eeeeee;
  .page-title {
    font-size: 20px;
    // margin-left: auto;
  }
}
</style>
