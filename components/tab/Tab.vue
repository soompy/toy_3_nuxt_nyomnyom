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
      <div v-if="selectedTab === 0">        
        <AccordionCp />
      </div>  
      <div v-else>
        {{ items[selectedTab].content }}
      </div>
    </div>
  </div>
</template>

<script>
import AccordionCp from '../accordion/AccordionCp.vue';

export default {  
  name: "Tab",
  components: { AccordionCp },
  data() {
    return {
      selectedTab: 0,
      items: [
        { label: "FAQ", content: "" },
        { label: "나의 문의사항", content: "나으 문의사항은 이것이당" },
      ],     
    };
  },   
};
</script>

<style lang="scss" scoped></style>
