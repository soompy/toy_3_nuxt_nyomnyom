<template>
  <div class="accordion-wrapper">
    <div class="accordion-item"
      v-for="(acc, index) in accs"
      :key="index"
      :class="{ active: index === activeItem }"
      @click="toggleItem(index)"
    >
      <div class="accordion-title">
        <span class="accordion-num">{{ acc.number }}</span>
        <p class="accordion-question">{{ acc.label }}</p>
        <i class="icon ic_close black"></i>
      </div>      
      <div class="accordion-answer" v-if="index === activeItem">        
        <div v-html="addLineBreaks(acc.content)"></div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "AccordionCp",  
  data() {
    return {
      activeItem: -1,
    };    
  },
  props: {
    accs: Array,    
  },
  methods: {
    addLineBreaks(text) {      
      return text.replace(/\n/g, '<br>');
    },
    toggleItem(index) {
      this.activeItem = this.activeItem === index ? -1 : index;
    },
  },
};
</script>
  
<style lang="scss" scoped>
.accordion-wrapper {
  position: relative;
  width: 100%;  
  .accordion-item {
    position: relative;
    width: 100%;    
    border-bottom: 1px solid #D8D8D9;    
    color: #353D3D;
    &:last-child {
      border-bottom: none;
    }
    &.active {      
      .accordion-title {
        .accordion-num {
          font-weight: 500;
        }     
        .icon {
          transform: rotate(0);
        }                
      }
      .accordion-answer {
        border-top: none;
      }
    }
  }
  .accordion-title {
    display: flex;
    align-content: center;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.8rem 0.6rem;
    .accordion-num {      
      color: #7070BD;
    }
    .accordion-question {
      font-size: 0.9rem;
      line-height: 1.5rem;
      margin: 0 0.4rem;      
    }
    .icon {
      flex-shrink: 0;
      width: 12px;
      height: 12px;
      margin-left: auto;
      transform: rotate(45deg);
      margin-top: 0.4rem;      
    }
  }
  .accordion-answer {
    position: relative;
    width: 100%;    
    border-top: 1px solid #D8D8D9;
    padding: 1.2rem 0.6rem 1.2rem 1.2rem;
    > div {      
      font-size: 0.85rem;
    }
  }
}
</style>
  