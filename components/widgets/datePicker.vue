<template>
  <div class="date-picker">
    <div class="year-list" ref="yearList" @scroll="onScroll('year', $event)">
      <div
        class="year-item"
        v-for="year in years"
        :key="year"
        @click="selectYear(year)"
        :class="{ on: selectedYear === year }"
      >
        {{ year }}
      </div>
    </div>
    <div class="month-list" ref="monthList" @scroll="onScroll('month', $event)">
      <div
        class="month-item"
        v-for="(month, index) in months"
        :key="month"
        @click="selectMonth(index + 1)"
        :class="{ on: selectedMonth === index + 1 }"
      >
        {{ month }}
      </div>
    </div>
    <div class="day-list" ref="dayList" @scroll="onScroll('day', $event)">
      <div
        class="day-item"
        v-for="day in days"
        :key="day"
        @click="selectDay(day)"
        :class="{ on: selectedDay === day }"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedYear: null,
      selectedMonth: null,
      selectedDay: null,
      years: [2023, 2024, 2025, 2026],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      days: Array.from({ length: 31 }, (_, i) => i + 1), // 일 목록
    };
  },
  computed: {
    yearListElement() {
      return this.$refs.yearList;
    },
    monthListElement() {
      return this.$refs.monthList;
    },
    dayListElement() {
      return this.$refs.dayList;
    },    
  },
  methods: {
    selectYear(year) {
      this.selectedYear = year;
    },
    selectMonth(month) {
      this.selectedMonth = month;
    },
    selectDay(day) {
      this.selectedDay = day;
    },     
    onScroll(type, event) {
      const listElement = this[`${type}ListElement`];
      const scrollAmount = 58; // 한 칸당 이동할 픽셀 값
      const newIndex = Math.round(listElement.scrollTop / scrollAmount);
      
      if (type === 'year') {
        this.selectYear(this.years[newIndex]);
      } else if (type === 'month') {
        this.selectMonth(newIndex + 1);
      } else if (type === 'day') {
        this.selectDay(this.days[newIndex]);
      }
    }, 
  },
};
</script>

<style lang="scss" scoped>
.date-picker {
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;

  .year-list,
  .month-list,
  .day-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    height: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
  }

  .year-item,
  .month-item,
  .day-item {
    opacity: 0.2;    
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 58px;    
    margin: 0 0.72rem;
    cursor: pointer;
    &.on {
      opacity: 1;
    }
  }
}
</style>
