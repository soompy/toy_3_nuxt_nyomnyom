<template>
  <div>
    <JoinList :join-items="joinItems" @open-modal="openModal" />

    <Modal v-if="showModal" :join-item="modalData" @close-modal="closeModal">
      <div>
        <h2>{{ modalData.name }} 모임</h2>
        <p>일시: {{ modalData.date }}</p>
        <p>장소: {{ modalData.place }}</p>
        <button class="close-button" @click="closeModal">닫기</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "../../components/Modal.vue";
import JoinList from "../../components/widgets/list/joinList.vue";

export default {
  name: "JoinHome",
  data() {
    return {
      showModal: false,
      modalData: null,
      joinItems: [
        {
          name: "와인",
          date: "2023-08-02",
          place: "강릉",
        },
        {
          name: "샤브샤브",
          date: "2023-08-23",
          place: "부산",
        },
        {
          name: "햄버거",
          date: "2023-09-10",
          place: "강남",
        },
        {
          name: "피자",
          date: "2023-10-21",
          place: "평창",
        },
        {
          name: "오마카세",
          date: "2023-11-30T00:00:00",
          place: "용산",
        },
      ],
    };
  },
  components: { JoinList, Modal },
  props: {
    joinItem: Object,
  },
  methods: {
    openModal(joinItem) {
      this.showModal = true;
      this.modalData = joinItem;
    },
    closeModal() {
      this.showModal = false;
      this.modalData = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  h2 {
  }
  p {
  }
}
</style>
