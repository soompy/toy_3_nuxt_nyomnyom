<template>
  <span class="profile-photo w-20 h-20">
    <img src="" alt="" />
  </span>
</template>

<script>
export default {
  name: "ProfilePhoto",
  data() {
    return {};
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.profile-photo {
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  background: #ccc;
  border-radius: 50%;
}
</style>
