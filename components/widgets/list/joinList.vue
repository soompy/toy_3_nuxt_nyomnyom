<template>
  <div>
    <ul class="join-list">
      <li class="join-item" v-for="(joinItem, index) in joinItems" :key="joinItem.date">
        <span
          class="tag"
          :class="{
            finish: isPast(joinItem.date),
            imminent: isImminent(joinItem.date) && !isPast(joinItem.date),
            spare: !isImminent(joinItem.date) && !isPast(joinItem.date),
          }"
        >
          {{ joinItem.tag }}
          <span v-if="isImminent(joinItem.date) && !isPast(joinItem.date)">마감임박</span>
          <span v-else-if="isPast(joinItem.date)">마감</span>
          <span v-else-if="!isImminent(joinItem.date) && !isPast(joinItem.date)"
            >여유</span
          >
        </span>
        <p class="join-name">{{ joinItem.name }} 모임</p>
        <div class="item-info">
          <strong class="date">일시 : {{ joinItem.date }}</strong>
          <span class="place">장소 : {{ joinItem.place }}</span>
          <span class="deadline"
            >조인 마감 기한 :
            <strong>{{ formatTimeRemaining(joinItem.date) }}</strong>
          </span>
        </div>
        <ButtonCp
          class="btn join pl-4 pr-4"
          label="조인하기"
          :height="46"
          textColor="white"
          :class="{ disabled: isPast(joinItem.date) }"
          @click="openModal(joinItem)"
          :disabled="isPast(joinItem.date)"          
        />
      </li>
    </ul>

    <Modal v-if="showModal && modalData" :join-item="modalData" @close="closeModal">
      <div>
        <h2>{{ modalData.name }} 모임</h2>
        <p>일시: {{ modalData.date }}</p>
        <p>장소: {{ modalData.place }}</p>
        <div class="modal-bottom">
          <ButtonCp
            class="btn join pl-4 pr-4"
            label="조인확인"
            :height="40"
            textColor="white"            
            @click="openConfirm(modalData)"
            :disabled="modalData === null"
          />
          <ButtonCp
            class="btn cancel pl-4 pr-4"
            label="취소"
            :height="40"
            textColor="black"            
            @click="closeModal"            
          />        
        </div>        
      </div>
    </Modal>

    <Modal v-if="showConfirm" :join-item="modalData" @close="closeModal">
      <div><strong> {{ modalData.name }} 모임 <br> 조인완료!!</strong></div>
    </Modal>
  </div>
</template>

<script>
import ButtonCp from "../../button/ButtonCp.vue";
import Modal from "../../Modal.vue";

export default {
  name: "joinList",
  components: {
    ButtonCp,
    Modal,
  },
  props: {
    joinItem: Object,
  },
  data() {
    return {
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
      timers: [],
      showModal: false,
      modalData: null,
      showConfirm: false,
    };
  },
  computed: {
    daysRemaining() {
      const currentDate = new Date();
      const eventDate = new Date("2023-12-31");

      const timeDiff = eventDate - currentDate;
      const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      return daysRemaining;
    },
  },
  created() {
    this.joinItems.forEach((joinItem) => {
      const timer = setInterval(() => {
        joinItem.remainingTime = this.formatTimeRemaining(joinItem.date);
      }, 1000);
      this.timers.push(timer);
    });
  },
  beforeDestroy() {
    this.timers.forEach((timer) => {
      clearInterval(timer);
    });
  },
  methods: {
    isImminent(joinItemDate) {
      const currentDate = new Date();
      const eventDate = new Date(joinItemDate);
      const timeDiff = eventDate - currentDate;

      const daysRemaining = timeDiff / (1000 * 60 * 60 * 24);
      return daysRemaining <= 3;
    },
    isPast(joinItemDate) {
      const currentDate = new Date();
      const eventDate = new Date(joinItemDate);
      return currentDate > eventDate;
    },
    formatTimeRemaining(joinItemDate) {
      const eventDate = new Date(joinItemDate);
      const currentDate = new Date();
      const timeDiff = eventDate - currentDate;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      return `${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
    },
    openModal(joinItem) {
      this.showModal = true;
      this.modalData = joinItem;
    },
    closeModal() {
      this.showModal = false;
      this.modalData = null;
    },            
    openConfirm(modalData) {
      if (modalData) {
        this.showConfirm = true;
        this.showModal = false;
        this.modalData = modalData;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.join-list {
  padding: 0 20px 40px;
  .join-item {
    position: relative;
    width: 100%;
    padding: 16px;
    margin-bottom: 12px;
    border: 1px solid #dedede;
    .tag {
      font-size: 12px;
      border-style: solid;
      border-width: 1px;
      padding: 3px 6px;
      border-radius: 3px;
      transition: all 0.5s ease-in-out;
      span {
        font-family: "Nanum Gothic", Nanum Gothic, HelveticaNeue-Light,
          AppleSDGothicNeo-Light, sans-serif;
      }
      &.imminent {
        border-color: #e50914;
        color: #e50914;
        animation: twinkling 0.8s ease-in-out infinite;
        animation-fill-mode: backwards;
      }
      &.spare {
        border-color: #03c75a;
        color: #03c75a;
      }
      &.finish {
        border-color: #cccccc;
        color: #cccccc;
      }
    }
    .join-name {
      font-size: 16px;
      font-family: "Nanum Gothic", Nanum Gothic, HelveticaNeue-Light,
        AppleSDGothicNeo-Light, sans-serif;
      font-weight: bold;
      margin: 10px 0 6px;
    }
    .item-info {
      font-size: 14px;
      strong,
      span {
        display: block;
        font-family: "Nanum Gothic", Nanum Gothic, HelveticaNeue-Light,
          AppleSDGothicNeo-Light, sans-serif;
          font-weight: normal;
      }
      .deadline {
        display: flex;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

@keyframes twinkling {
  0% {
    background: transparent;
  }
  100% {
    background: #fffc00;
  }
}

.modal-overlay {
  .modal-content {
    width: 100%;
  }
  .modal-bottom {
    display: flex;
    align-content: center;
    margin-top: 20px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      margin-right: 8px;
      margin-top: 0;
      border-radius: 6px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
