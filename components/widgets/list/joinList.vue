<template>
  <div>
    <ul class="join-list">
      <li class="join-item" v-for="(joinItem, index) in joinItems" :key="joinItem.date">
        <span class="image-wrapper">
          <img
            :src="require(`../../../assets/images/join/${joinItem.image}.jpg`)"
            :alt="joinItem.title"
          />
        </span>
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
          :label="isPast(joinItem.date) ? '조인마감' : '조인하기'"
          :height="46"
          :class="{ disabled: isPast(joinItem.date) }"
          @click="openModal(joinItem)"
          :disabled="isPast(joinItem.date)"
        />
      </li>
    </ul>

    <Modal v-if="showModal && modalData" :join-item="modalData" @close="closeModal">
      <div class="inner">
        <h2>{{ modalData.name }} 모임</h2>
        <p>일시: {{ modalData.date }}</p>
        <p>장소: {{ modalData.place }}</p>
        <div class="modal-bottom">
          <ButtonCp
            class="btn join pl-4 pr-4"
            label="조인확인"
            :height="46"
            textColor="#3C4544"
            @click="openConfirm(modalData)"
            :disabled="modalData === null"
          />
          <ButtonCp
            class="btn cancel pl-4 pr-4"
            label="취소"
            :height="46"
            textColor="black"
            @click="closeModal"
          />
        </div>
      </div>
    </Modal>

    <Modal v-if="showConfirm" :join-item="modalData" @close="closeDim">
      <div class="confetti-container">
        <strong>
          {{ modalData.name }} 모임 <br />
          조인완료!!
        </strong>
        <div class="confetti">
          <div class="confetti-piece">            
            <ConfettiEffect :animationData="animationData" width="200px" height="200px" />            
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import ButtonCp from "../../button/ButtonCp.vue";
import ConfettiEffect from '../../lottie/ConfettiEffect.vue';
import Modal from "../../Modal.vue";

export default {
  name: "joinList",
  components: {
    ButtonCp,
    ConfettiEffect,
    Modal,    
  },
  props: {
    joinItem: Object,
  },
  data() {
    return {
      joinItems: [
        {
          image: "join_00",
          title: "와인모임",
          name: "와인",
          date: "2023-08-02",
          place: "강릉",
        },
        {
          image: "join_01",
          title: "샤브샤브모임",
          name: "샤브샤브",
          date: "2023-08-23",
          place: "부산",
        },
        {
          image: "join_02",
          title: "햄버거모임",
          name: "햄버거",
          date: "2023-09-10",
          place: "강남",
        },
        {
          image: "join_03",
          title: "피자모임",
          name: "피자",
          date: "2023-10-21",
          place: "평창",
        },
        {
          image: "join_04",
          title: "오마카세모임",
          name: "오마카세",
          date: "2023-11-30",
          place: "용산",
        },
      ],
      timers: [],
      showModal: false,
      modalData: null,
      showConfirm: false,
      animationData: require('../../../assets/images/effect/confetti.json'),
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
    closeDim() {
      this.showConfirm = false;      
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
  padding-left: 0;
  margin: 0;
  .join-item {
    position: relative;
    width: 100%;
    padding: 1.6rem 20px;
    background: #ffffff;    
    box-shadow: 0.24rem 0.24rem 0.24rem #eeeeee;    
    .image-wrapper {
      overflow: hidden;
      display: block;
      width: 100%;
      height: 16rem;
      border-radius: 0.8rem;
      margin-bottom: 0.8rem;
      filter: contrast(104%);
      img {
        object-fit: cover;
      }
    }
    .tag {
      display: inline-block;
      height: 1.6rem;
      border-style: solid;
      border-width: 0.12rem;
      padding: 0 0.4rem;
      border-radius: 0.36rem;
      transition: all 0.5s ease-in-out; 
      span {
        font-size: 0.8rem;
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
      font-size: 1rem;
      font-weight: bold;
      margin: 1rem 0 0.72rem;
    }
    .item-info {
      strong,
      span {
        display: block;
        font-size: 0.9rem;
        font-weight: normal;
      }
      .deadline {
        display: flex;
      }
    }
    .btn {      
      height: 4.8rem;
      font-size: 0.9rem;
      margin-top: 0.6rem;
      padding: 0 1rem;
    }
    &:after {
      display: block;
      clear: both;
      content: '';
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 0;
      width: auto;
      height: 0.06rem;
      background: #E2E2E2;
    }
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      border-bottom: none;
      &:after {
        display: none;
      }
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
    overflow: hidden;
    width: 100%;
  }
  .inner {
    h2 {
      font-weight: bold;
      margin-bottom: 0.24rem;
    }
    p {
      margin: 1.3rem 0;
    }
  }
  .modal-bottom {
    display: flex;
    align-content: center;
    margin-top: 2.4rem;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      margin-right: 0.96rem;
      margin-top: 0;
      border-radius: 0.72rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
.confetti-container {
  position: relative;
  .confetti {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;    
  }
}
</style>
