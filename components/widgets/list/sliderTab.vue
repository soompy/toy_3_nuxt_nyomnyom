<template>
  <div class="slider-container">
    <section class="interests-tab">
      <strong>관심사</strong>
      <InterestsList @tabClicked="handleTabClick" :interests="interests" />
    </section>

    <SliderComponent 
      v-for="(tabData, idx) in tabsData" 
      :key="idx" 
      v-if="selectedTabIndex === idx"
      :items="tabData.items"      
    />
  </div>
</template>

<script>
import SliderComponent from "../../slider/SliderComponent.vue";
import InterestsList from "./interestsList.vue";

export default {
  name: "SliderTab",
  components: {
    SliderComponent,
    InterestsList,
  },
  data() {
    return {
      selectedTabIndex: 0,
      tabsData: [     
      {
          items: [
            {
              photo: "panda_fu_00",
              name: "푸바오",
              title: "푸바오 1",
              description: "판다월드 대스타 아기판다 푸바오! 2020년 7월 20일생으로 머리에 뿔처럼 털이 올라와있어요.",
            },
            {
              photo: "panda_fu_01",
              name: "푸바오",
              title: "푸바오 2",
              description:
                "숨막히게 귀엽고 깜찍한 우주최강 장난꾸러기 아기판다 푸바오의 원픽 판다 빵",
            },
          ],
        },        
        {
          items: [
            {
              photo: "panda_ai_00",
              name: "아이바오",
              title: "아이바오 1",
              description:
                "세 딸의 엄마 아이바오! 2013년 7월 13일생으로 순둥하고 둥글둥글한 미모를 갖고 있어요.",
            },
            {
              photo: "panda_ai_01",
              name: "아이바오",
              title: "아이바오 2",
              description:
                "낙엽을 걷는 아이바오 예뻐예뻐 아이바오!",
            },
            {
              photo: "panda_ai_02",
              name: "아이바오",
              title: "아이바오 3",
              description:
                "아이스블럭에서 휴식을 취하고 있는 아이바오!",
            },
          ],
        },   
        {
          items: [
            {
              photo: "panda_le_00",
              name: "러바오",
              title: "러바오 1",
              description:
                "판다월드 청일점 러바오! 2012년 7월 28일생으로 미식가이자 낭만판다예요.",
            },
            {
              photo: "panda_le_01",
              name: "러바오",
              title: "러바오 2",
              description: "아기시절 러바오는 애교가 넘치는 장난꾸러기 였어요.",
            },
            {
              photo: "panda_le_02",
              name: "러바오",
              title: "러바오 3",
              description: "잠자는 숲속의 러바오 왕자!",
            },
          ],
        },        
        {
          items: [
            {
              photo: "panda_aifu_00",
              name: "아이바오와 푸바오",
              title: "아이바오와 푸바오 1",
              description:
                "해먹에서 함께 노는 바오걸즈! 아이바오도 아기가 되었어요.",
            },
            {
              photo: "panda_aifu_01",
              name: "아이바오와 푸바오",
              title: "아이바오와 푸바오 2",
              description:
                "바오걸즈의 대나무먹방시간",
            },
            {
              photo: "panda_aifu_02",
              name: "아이바오와 푸바오",
              title: "아이바오와 푸바오 2",
              description:
                "푸바오를 바라보는 아이바오",
            },
            {
              photo: "panda_aifu_03",
              name: "아이바오와 푸바오",
              title: "아이바오와 푸바오 2",
              description:
                "푸바오를 소중하게 꼭 안고있는 아이바오",
            },
            {
              photo: "panda_aifu_04",
              name: "아이바오와 푸바오",
              title: "아이바오와 푸바오 2",
              description:
                "큰 엄마 삼각김밥과 작은 아기 삼각김밥",
            },
          ],
        },
        {
          items: [
            {
              photo: "panda_twins_00",
              name: "쌍둥이 동생판다",
              title: "쌍둥이 동생판다 1",
              description:
                "2023년 7월 7일 쌍둥이 공주님 판다가 태어났어요!!",
            },
            {
              photo: "panda_twins_01",
              name: "쌍둥이 동생판다",
              title: "쌍둥이 동생판다 2",
              description:
                "판다티가 나는 쌍둥이 바오들",
            },       
            {
              photo: "panda_twins_02",
              name: "쌍둥이 동생판다",
              title: "쌍둥이 동생판다 3",
              description:
                "쑥쑥 자라고 있는 푸바오의 쌍둥이 동생들 똔똔해요!!",
            },           
          ],
        },
        {
          items: [
            {
              photo: "panda_ks_00",
              name: "판다 할아버지들 강바오와 송바오",
              title: "판다 할아버지들 강바오와 송바오 1",
              description:
                "판다 할아버지들 강바오와 송바오와 함께해서 행복한 푸바오",
            },
            {
              photo: "panda_ks_01",
              name: "판다 할아버지들 강바오와 송바오",
              title: "판다 할아버지들 강바오와 송바오 2",
              description:
                "할아버지 손 잡고 찰칵!",
            },
            {
              photo: "panda_ks_02",
              name: "판다 할아버지들 강바오와 송바오",
              title: "판다 할아버지들 강바오와 송바오 3",
              description:
                "송바오 할아버지의 볼하트",
            },
            {
              photo: "panda_ks_03",
              name: "판다 할아버지들 강바오와 송바오",
              title: "판다 할아버지들 강바오와 송바오 4",
              description:
                "강바오 할아버지와 스마트폰",
            },
          ],
        },
      ],
      interests: [
        { image: "interest_00", title: "햄버거" },
        { image: "interest_01", title: "샌드위치" },
        { image: "interest_02", title: "타코" },
        { image: "interest_03", title: "핫도그" },
        { image: "interest_04", title: "조각피자" },
        { image: "interest_05", title: "피자" },
      ],
    };
  },
  methods: {
    handleTabClick(index) {
      this.selectedTabIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
.interests-tab {
  display: flex;
  align-items: center;
  padding: 20px 0 20px 20px;
  strong {
    flex-shrink: 0;
    font-size: 13px;
    padding-right: 10px;
  }
}
</style>
