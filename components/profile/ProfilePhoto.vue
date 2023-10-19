<template>
  <span class="profile-photo w-16 h-16">
    <img
      :src="getProfilePath(profile.image)"
      :alt="profile.name"
    />
  </span>
</template>

<script>
export default {
  name: "ProfilePhoto",  
  props: {
    profile: {
      type: Object,
      required: true
    },
  },
  methods: {
    getProfilePath(profileName) {     
      return require(`../../assets/images/panda/${profileName}`);
    }
  },
};
</script>

<style lang="scss" scoped>
.profile-photo {
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  border-radius: 50%;
}
</style>
