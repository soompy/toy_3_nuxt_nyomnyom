<template>
  <header class="header">
    <Logo class="w-14 h-14" />
    <p class="page-title">{{ pageTitle }}</p>
    <MenuBar />
  </header>
</template>

<script>
import Logo from "../../components/Logo.vue";
import MenuBar from './MenuBar.vue';

export default {
  name: "PageHeader",
  props: {
    pageTitle: String,
  },
  components: {
    Logo,
    MenuBar,
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky !important;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 70px;
  padding: 6px 20px;
  border-bottom: 1px solid #eeeeee;
  background: #ffbd2c;
  box-shadow: 6px 0px 5px 1px rgba(0, 0, 0, 0.1);
  .page-title {
    font-size: 17px;        
    margin-left: -32px;
  }
}
</style>
