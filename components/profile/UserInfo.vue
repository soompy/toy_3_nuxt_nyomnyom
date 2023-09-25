<template>
  <div class="user-info pl-4">
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

  p {
    font-size: 0.9rem;
    padding: 0.3rem 0;
    margin: 0;

    &.user-name {
      font-weight: bold;
    }
    &.user-level {
      color: #3C4544;
    }
  }
}
</style>
