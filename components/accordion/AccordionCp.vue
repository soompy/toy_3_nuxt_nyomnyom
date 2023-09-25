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
  props: {
    items: Array,
  },
  data() {
    return {
      activeItem: -1,
      accs: [
        {
          number: "1",
          label: "따로 주문한 상품의 묶음 배송이 가능한가요?",
          content: "네, 묶음 배송은 가능합니다. \n\n 주문하신 다수의 상품을 한 번에 묶어서 배송하는 옵션을 제공하고 있습니다. 이를 위해서는 주문 시에 '묶음 배송' 옵션을 선택하시거나, 주문번호를 통해 고객 서비스팀에 문의해 주시면 됩니다. 묶음 배송은 배송료를 절약하고 환경에도 도움을 주는 효율적인 방법 중 하나이니, 언제든지 이용해 주시기 바랍니다. 묶음 배송에 관한 자세한 내용은 고객 서비스팀에 문의해 주세요."
        },
        { 
          number: "2", 
          label: "예약한 제품은 언제 발송되나요?",
          content: "예약한 제품은 주문 후 보통 [얘약한 제품을 배송하기로 한 기간] 내에 발송됩니다. 제품의 얘약 시간은 주문하신 제품 및 현재 재고 상황에 따라 다를 수 있습니다. 주문하신 제품의 얘약 시간과 예상 발송일은 주문 확인 이메일에 명시되어 있으며, 주문 후 발송 처리가 시작되면 발송 상태를 추적할 수 있는 정보를 제공해 드립니다. 주문하신 제품이 특별한 얘약 사항이 있는 경우에는 고객 서비스팀에 문의해 주시면 도움을 드리겠습니다."
        },
        { 
          number: "3", 
          label: "결함이 있는 상품을 배송 받았어요.", 
          content: "결함이 있는 상품을 받으셨다니 죄송합니다. 저희 제품이 고객님께 완벽한 상태로 전달되지 않았다는 점에 대해 진심으로 사과드립니다. 불편을 끼쳐 드린 점 정말 죄송합니다. 빠른 문제 해결을 위해 다음 단계를 따라주시면 됩니다: 결함이 발견된 상품의 사진을 촬영하여 고객 서비스팀으로 보내주세요. 결함의 종류와 정확한 내용을 파악하는 데 도움이 됩니다. 고객 서비스팀에 상황을 설명하고 주문 번호를 제공해주세요. 이를 통해 문제를 빠르게 확인하고 조치를 취할 수 있습니다. 결함이 확인된 경우, 상품의 교환 또는 환불 절차에 대해 안내해 드릴 것입니다. 고객님의 편의를 위해 가장 적합한 조치를 취하도록 노력하겠습니다. 고객님의 이해와 협조에 감사드립니다. 빠른 시일 내에 문제를 해결하고 만족스러운 서비스를 제공하기 위해 노력하겠습니다."
        },
        { 
          number: "4", 
          label: "주문한 상품을 취소하고 싶어요.", 
          content: "주문을 취소하고 싶어주셔서 죄송합니다. 주문을 취소하려는 이유와 주문 번호를 알려주시면 도와드릴 수 있을 것 같습니다. 주문 취소 절차는 다음과 같습니다: 주문 번호와 취소 이유를 포함한 취소 요청을 고객 서비스팀으로 전달해주세요. 주문 번호는 주문 확인 이메일에 포함되어 있습니다. 주문 취소가 가능한 시점에 따라 절차가 다를 수 있습니다. 주문이 아직 처리되지 않았거나 상품이 발송되기 전에는 더욱 쉽게 취소할 수 있을 것입니다. 주문 취소 요청이 접수되면 빠르게 처리해 드릴 것이며, 결제 취소 또는 환불 절차에 대한 안내를 제공해 드릴 것입니다. 언제든지 도움이 필요하시면 고객 서비스팀에 문의해 주세요. 주문을 처리하는 데 필요한 모든 정보를 제공해 드리겠습니다. 고객님의 요청에 빠르고 정확하게 응답하도록 최선을 다하겠습니다."
        },
      ],

    };    
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
      font-size: 0.9rem;
    }
  }
}
</style>
  