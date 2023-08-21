<template>
  <div>
    <h2 class="top-title">
      조인해보세요!!      
    </h2>
    <JoinList />
  </div>
</template>

<script>
import JoinList from "../../components/widgets/list/joinList.vue";

export default {
  name: "JoinHome",  
  components: { JoinList },  
};
</script>

<style lang="scss" scoped>
</style>
