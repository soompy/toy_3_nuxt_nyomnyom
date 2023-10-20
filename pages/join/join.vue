<template>
  <div>
    <h2 class="top-title">
      취향에 맞는 모임에<br>
      조인해보세요!!🍔      
    </h2>
    <JoinList />
  </div>
</template>

<script>
import JoinList from "../../components/widgets/list/joinList.vue";

export default {
  name: "JoinHome",
  components: { JoinList },
  mounted() {
    console.log(this.$route.name);
  },
};
</script>

<style lang="scss" scoped>
.top-title {
  padding: 1.4rem 20px 1.4rem 1.2rem;
}
</style>