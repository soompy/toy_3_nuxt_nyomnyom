<template>
  <div>
    <PageHeader pageHeaderTitle="검색" />

    <div class="app-contents-wrap">
      <SearchField placeholderValue="검색어를 입력해주세요" />
    </div>
  </div>
</template>

<script>
import PageHeader from "../../components/Header/PageHeader.vue";
import SearchField from "../../components/inputField/SearchField.vue";

export default {
  name: "SearchPage",
  components: {
    PageHeader,
    SearchField,
  },
};
</script>

<style lang="scss" scoped></style>