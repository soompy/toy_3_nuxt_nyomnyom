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
              photo: "burger_00",
              name: "빅맥",
              title: "빅맥",
              description: "100% 순 쇠고기 패티 두 장에 빅맥®만의 특별한 소스. \n 입안에서 살살 녹는 치즈와 신선한 양상추, 양파, 그리고 피클까지. \n 50년 넘게 전 세계인의 입맛을 사로 잡은 버거의 대명사.",
            },
            {
              photo: "burger_01",
              name: "더블 쿼터파운더 치즈",
              title: "더블 쿼터파운더 치즈",
              description:
                "두 배 이상 커진 1/4 파운드 \n 비프 패티가 두 장 (226그램)! \n 육즙이 풍부한 고기 맛을 \n 그대로 살린 100% 순 쇠고기 패티 두 장과 \n 치즈 두 장이 입안 가득 완벽하게 조화되는 놀라운 맛",
            },
            {
              photo: "burger_02",
              name: "맥스파이시 상하이 버거",
              title: "맥스파이시 상하이 버거",
              description:
                "매콤한 시즈닝을 입힌 100% 닭가슴 통살 위에 \n 아삭아삭한 양상추와 신선한 토마토~ \n 겉은 바삭, 속은 부드러운 치킨 패티의 매콤함으로 \n 입맛도 기분도 화끈하게!",
            },
          ],
        },
        {
          items: [
            {
              photo: "sandwich_00",
              name: "에그마요",
              title: "에그마요",
              description: "부드러운 달걀과 고소한 마요네즈가 만나 더 부드러운 스테디셀러",
            },
            {
              photo: "sandwich_01",
              name: "이탈리안 비엠티",
              title: "이탈리안 비엠티",
              description:
                "페퍼로니, 살라미 그리고 햄이 만들어내는 최상의 조화! \n 전세계가 사랑하는 써브웨이의 베스트셀러! \n Biggest Meatiest Tastiest, its’ B.M.T.",
            },
            {
              photo: "sandwich_02",
              name: "비엘티",
              title: "비엘티",
              description:
                "오리지널 아메리칸 스타일 베이컨의 풍미와 바삭함 그대로~",
            },
          ],
        },
        {
          items: [
            {
              photo: "taco_00",
              name: "쉬림프 타코 세트",
              title: "쉬림프 타코 세트",
              description: "쉬림프 타코 2개 + 콜라",
            },
            {
              photo: "taco_01",
              name: "치즈 나초",
              title: "치즈 나초",
              description: "치즈소스 + 나초칩스",
            },
            {
              photo: "taco_02",
              name: "빅벨박스",
              title: "빅벨박스",
              description: "크런치랩(카니타스) + 소프트 클래식 타코(카니타스) + 크런치 클래식 타코(비프) + 나쵸 칩스 + 치즈 롤 업 + 캔콜라(250ml) 2ea",
            },
          ],
        },
        {
          items: [
            {
              photo: "hotdog_00",
              name: "감자핫도그",
              title: "감자핫도그",
              description: "오동통한 점보소시지와 고소하고 담백한 감자가 만나 더욱 고급스러운 핫도그",
            },
            {
              photo: "hotdog_01",
              name: "모짜체다 핫도그",
              title: "모짜체다 핫도그",
              description:
                "고소한 모짜렐라와 담백한 체다치즈를 한번에 맛볼 수 있는 핫도그",
            },
            {
              photo: "hotdog_02",
              name: "할라피뇨 핫도그",
              title: "할라피뇨 핫도그",
              description:
                "오동통하고 매콤한 할라피뇨 소시지로 식감을 살리고 느끼함은 줄인 매운 핫도그",
            },
          ],
        },
        {
          items: [
            {
              photo: "chicken_00",
              name: "켄터키통다리순살치킨 5조각",
              title: "켄터키통다리순살치킨 5조각",
              description: "닭다리 통살로 만든 최고급 프리미엄 치킨(스윗칠리소스에 찍어 먹으면 더욱 맛있습니다)",
            },
            {
              photo: "chicken_01",
              name: "갓양념치킨 5조각",
              title: "갓양념치킨 5조각",
              description:
                "달콤 매콤, 먹을수록 땡기는 맵달의 완벽한 조화 한국 사람 입맛에 딱! 맞춘 환상의 양념 치킨!",
            },
            {
              photo: "chicken_02",
              name: "핫크리스피치킨 5조각",
              title: "핫크리스피치킨 5조각",
              description:
                "KFC만의 비법으로 매콤바삭하게 튀겨낸 KFC 핫크리스피치킨",
            },
          ],
        },
        {
          items: [
            {
              photo: "pizza_00",
              name: "씨푸드킹",
              title: "씨푸드킹",
              description: "쫄깃한 통관자와 탱글탱글 통새우가 듬뿍! \n 달콤한 프레첼 엣지까지~ \n 오리지널 도우 : 크런치 라이스가 도우의 수분을 지켜줘 더욱 쫄깃! 바삭, 고소한 맛까지",
            },
            {
              photo: "pizza_01",
              name: "립스테이크",
              title: "립스테이크",
              description:
                "180g 갈비맛 스테이크가 통째로! \n 오리지널 도우 : 크런치 라이스가 도우의 수분을 지켜줘 더욱 쫄깃! 바삭, 고소한 맛까지",
            },
            {
              photo: "pizza_02",
              name: "토핑킹",
              title: "토핑킹",
              description: "돌아온 토핑킹, 이번엔 고기 토핑 360g을 한 판 가득 담았다! \n 오리지널 도우 : 크런치 라이스가 도우의 수분을 지켜줘 더욱 쫄깃! 바삭, 고소한 맛까지",
            },
          ],
        },        
      ],
      interests: [
        { image: "interest_00", title: "햄버거" },
        { image: "interest_01", title: "샌드위치" },
        { image: "interest_02", title: "타코" },
        { image: "interest_03", title: "핫도그" },
        { image: "interest_04", title: "치킨" },
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
  padding-top: 1.2rem;
  padding-left: 1.2rem;
  strong {
    flex-shrink: 0;
    font-size: 0.78rem;
    padding-right: 0.6rem;
  }
}
</style>
