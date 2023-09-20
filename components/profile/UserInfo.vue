<template>
  <div class="user-info pl-5">
    <p class="user-name">{{ userInfo.name }}</p>
    <p class="user-level">{{ userInfo.level }}</p>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1rem;

  p {
    padding: 2px 0;

    &.user-name {
      font-weight: bold;
    }
    &.user-level {
      color: lime;
    }
  }
}
</style>
