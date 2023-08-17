<template>
  <div>
    <div class="tabs">
      <ul>
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="{ active: index === selectedTab }"
          @click="selectedTab = index"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div v-for="(item, index) in items" :key="index" v-if="selectedTab === index">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 0,
      activeTabIndex: 0,
      items: [
        { label: "Tab 1", content: "Tab 1 Content" },
        { label: "Tab 2", content: "Tab 2 Content" },
        { label: "Tab 3", content: "Tab 3 Content" },
        { label: "Tab 4", content: "Tab 4 Content" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
