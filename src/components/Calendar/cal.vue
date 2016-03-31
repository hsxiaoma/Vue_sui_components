<template>
  <div class="picker-modal">
    <div class="toolbar">
      <div class="tool-inner">
        <div class="picker-calendar-month">
          <a href="javascript:;" class="icon-only picker-calendar-prev-month" @click="delMon">
            <i class="icon icon-left"></i>
          </a>
          <div class="current-month">{{ month }}</div>
          <a href="javascript:;" class="icon-only picker-calendar-next-month" @click="addMon">
            <i class="icon icon-right"></i>
          </a>
        </div>
        <div class="picker-calendar-year">
          <a href="javascript:;" class="icon-only picker-calendar-prev-year" @click="delYear">
            <i class="icon icon-left"></i>
          </a>
          <div class="current-year">{{ year }}</div>
          <a href="javascript:;" class="icon-only picker-calendar-next-year" @click="addYear">
            <i class="icon icon-right"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="picker-modal-inner">
      <div class="picker-calendar-week-days">
        <span class="picker-calendar-week-day">周一</span>
        <span class="picker-calendar-week-day">周二</span>
        <span class="picker-calendar-week-day">周三</span>
        <span class="picker-calendar-week-day">周四</span>
        <span class="picker-calendar-week-day">周五</span>
        <span class="picker-calendar-week-day">周六</span>
        <span class="picker-calendar-week-day">周日</span>
      </div>
      <div class="picker-calendar-months">
        <div class="picker-calendar-wrap">
          <div class="picker-calendar-panel">
            <a href="javascript:;" class="picker-calendar-day" :class="{ 'hightlight': item.m === 1 }" v-for="item in dateArr" track-by="$index" @click="selecte(item.m, $event)">
              <span>{{ item.d}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mon: 3,
        year: 2016
      }
    },
    computed: {
      dateArr () {
        let calendar = []
        let lastCalendar = []
        let theMonDateNum = new Date(this.year, this.mon, 0).getDate()
        let theMonWeek = new Date(this.year, this.mon - 1, 1).getDay()
        let beforeMonDateNum = new Date(this.year, this.mon - 1, 0).getDate()
        for (let i = 1; i <= theMonDateNum; i++) {
          calendar.push({m: 1, d: i})
        }
        for (let j = theMonWeek - 1; j > 0; j--) {
          lastCalendar.push({m: 0, d: beforeMonDateNum - j + 1})
        }
        var result = lastCalendar.concat(calendar)
        let len = 42 - result.length
        for (let k = 1; k <= len; k++) {
          result.push({m: 2, d: k})
        }
        return result
      },
      month () {
        switch (this.mon) {
          case 1 :
            return '一月'
          case 2 :
            return '二月'
          case 3 :
            return '三月'
          case 4 :
            return '四月'
          case 5 :
            return '五月'
          case 6 :
            return '六月'
          case 7 :
            return '七月'
          case 8 :
            return '八月'
          case 9 :
            return '九月'
          case 10 :
            return '十月'
          case 11 :
            return '十一月'
          case 12 :
            return '十二月'
        }
      }
    },
    methods: {
      delMon () {
        if (this.mon === 1) {
          this.year--
          this.mon = 12
          return
        }
        this.mon--
      },
      addMon () {
        if (this.mon === 12) {
          this.year++
          this.mon = 1
          return
        }
        this.mon++
      },
      delYear () {
        if (this.year === 0) {
          return
        }
        this.year--
      },
      addYear () {
        this.year++
      },
      selecte (m, e) {
        let day = e.target.innerHTML
        if (m === 0) {
          this.$dispatch('selected', this.year, this.mon - 1, day)
          return
        }
        if (m === 2) {
          this.$dispatch('selected', this.year, this.mon + 1, day)
          return
        }
        this.$dispatch('selected', this.year, this.mon, day)
      }
    }
  }
</script>

<style lang="less">
  @import "../../style/widget/sui_calendar";
</style>
