<template>
  <div>
    <ul class="join-list">
      <li class="join-item" v-for="(joinItem, index) in joinItems" :key="joinItem.date" :class="{ 'finish-item': isPast(joinItem.date) }" >
        <div class="join-box">
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
            
            <span class="deadline" :class="{ 'hide': isPast(joinItem.date) }"
              >조인 마감 기한 : <strong class="pl-1">{{ formatTimeRemaining(joinItem.date) }}</strong>
            </span>                      
          </div>
          <ButtonCp
            class="btn join pl-4 pr-4"
            :label="isPast(joinItem.date) ? '조인마감' : '조인하기'"
            :height="42"
            :class="{ disabled: isPast(joinItem.date) }"
            @click="openModal(joinItem)"
            :disabled="isPast(joinItem.date)"
          />
        </div>        

        <div class="finish-text">마감</div>
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
            :height="42"
            textColor="#3C4544"
            @click="openConfirm(modalData)"
            :disabled="modalData === null"
          />
          <ButtonCp
            class="btn cancel pl-4 pr-4"
            label="취소"
            :height="42"
            textColor="black"
            @click="closeModal"
          />
        </div>
      </div>
    </Modal>

    <Modal v-if="showConfirm" :join-item="modalData" @close="closeDim">
      <div class="confetti-container">       
        <div class="confetti-piece">
          <strong>
            {{ modalData.name }} 모임 <br />
            조인완료!!
          </strong>
          <ConfettiEffect :animationData="animationData" width="200px" height="200px" />
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
          date: "2023-10-31",
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
  watch: {
    modalData: {
      handler(newModalData) {
        if (newModalData && newModalData.date) {
          this.timeRemaining = this.calculateTimeRemaining();
        }
      },
      immediate: true,
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
      
      return `${days}일 ${hours}시간`;
    },
    getTimeRemaining() {      
      return `${days}일 ${hours}시간`;
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
        
        setTimeout(() => {
          this.closeDim();
        }, 3000);
      }
    },
    timeRemaining() {
      if (!this.modalData || !this.modalData.date) {
        return '';
      }

      const eventDate = new Date(this.modalData.date);
      const currentDate = new Date();
      const timeDiff = eventDate - currentDate;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));      

      return `${days}일 ${hours}시간`;
    },
    calculateTimeRemaining() {
      const eventDate = new Date(this.modalData.date);
      const currentDate = new Date();
      const timeDiff = eventDate - currentDate;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      return `${days}일 ${hours}시간`;
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
      margin-bottom: 1.2rem;
      filter: contrast(104%);
      img {
        object-fit: cover;
      }
    }
    .tag {
      display: inline-block;      
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
        color: #ffffff;
        animation: twinkling 1s ease-in-out infinite;
        animation-fill-mode: backwards;
      }
      &.spare {
        border-color: #03c75a;
        color: #03c75a;
      }
      &.finish {
        border-color: #969393;
        color: #969393;
      }
    }
    .join-name {
      font-size: 1rem;
      font-weight: bold;
      margin: 1rem 0 0.8rem;
    }
    .item-info {
      strong,
      span {
        display: block;
        font-size: 0.9rem;
        font-weight: normal;
      }
      .place {
        margin: 0.5rem 0;
      }
      .deadline {
        display: flex;
        &.hide {
          display: none;
        }
      }
    }
    .btn {      
      font-size: 0.9rem;
      margin-top: 1rem;
      padding: 0 1rem;
    }   
    .finish-text {
      display: none;
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
    &.finish-item { 
      .join-box {
        opacity: 0.5;
      }            
      .finish-text {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;        
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 12rem;
        height: 12rem;
        content: '마감';
        font-size: 2rem;
        font-weight: bold;
        border-radius: 50%;
        background: #333333;
        color: #ffffff;
        z-index: 1;
      }
    }
  }
}

@keyframes twinkling {
  0% {
    background: transparent;
    color: #e50914;
  }
  50% {
    background: #e50914;
    color: #ffffff;
  }
  100% {
    background: transparent;
    color: #e50914;
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
      margin-bottom: 1rem;
    }
    p {
      margin: 0.5rem 0;
    }
  } 
  .modal-bottom {
    display: flex;
    align-content: center;
    margin-top: 1.4rem;

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
  text-align: center;
  transition: all 0.7s ease-in-out;
  .confetti-piece {
    pointer-events: none;    
    strong {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 1rem;
      line-height: 1.6rem;
    }
  }
}
</style>
