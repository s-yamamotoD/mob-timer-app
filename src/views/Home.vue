<template>
  <v-main>
    <h1>Home</h1>
    <MinuteSettingBtn
      left-label="Mob timer"
      right-label="minutes"
      :value="mobTimerMinute"
      @change-minute="updateMobTimerMinute"
    ></MinuteSettingBtn>

    <MinuteSettingBtn
      left-label="Break after"
      right-label="typists (10 minutes)"
      :value="breakTimerMinute"
      @change-minute="updateBreakAfterMinute"
    ></MinuteSettingBtn>

    <MinuteSettingBtn
      left-label="Coffee break"
      right-label="minutes"
      :value="coffeeBreakMinute"
      @change-minute="updateCoffeeBreakMinute"
    ></MinuteSettingBtn>

    <div>{{ formatTimer }}</div>

    <v-btn v-if="!isTimer" @click="startTimer">Start Session</v-btn>
    <div v-if="isTimer">
      <v-btn v-if="!isTimerStop" @click="stopTimer">Pause</v-btn>
      <v-btn v-if="isTimerStop" @click="continueTimer">Continue</v-btn>
      <v-btn @click="reupdateMobTimerMinute">Reset Mob Session</v-btn>
    </div>
  </v-main>
</template>

<script>
import MinuteSettingBtn from "@/components/MinuteSettingBtn"

const DEFAULT_TIMER_SECOND = 1500
const DEFAULT_MOB_TIMER_MINUTE = 25
const DEFAULT_BREAK_MINUTE = 5
const DEFAULT_COFFEE_BREAK_MINUTE = 5
const ONE_SECOND = 1

export default {
  name: "Home",

  components: {
    MinuteSettingBtn,
  },

  data: () => ({
    timer: DEFAULT_TIMER_SECOND,
    mobTimerMinute: DEFAULT_MOB_TIMER_MINUTE,
    breakTimerMinute: DEFAULT_BREAK_MINUTE,
    coffeeBreakMinute: DEFAULT_COFFEE_BREAK_MINUTE,
    timerID: null,
    isTimer: false,
    isTimerStop: false,
  }),

  computed: {
    formatTimer() {
      const minute = this.convertSecondToMinute(this.timer)
      const second = Math.floor(this.timer % 60)
      return `${minute}:${second}`
    },
  },

  methods: {
    updateMobTimerMinute(minute) {
      this.mobTimerMinute = minute
      if (!this.isTimer) {
        this.timer = this.convertMinuteToSecond(minute)
      }
    },

    updateBreakAfterMinute(minute) {
      this.breakTimerMinute = minute
    },

    updateCoffeeBreakMinute(minute) {
      this.coffeeBreakMinute = minute
    },

    createIntervalTimer() {
      if (this.timerID) return
      this.timerID = setInterval(() => {
        this.timer -= ONE_SECOND
      }, 1000)
    },

    clearIntervalTimer() {
      clearInterval(this.timerID)
      this.timerID = null
    },

    startTimer() {
      this.isTimer = true
      this.createIntervalTimer()
    },

    stopTimer() {
      this.isTimerStop = true
      this.clearIntervalTimer()
    },

    continueTimer() {
      this.isTimerStop = false
      this.createIntervalTimer()
    },

    convertMinuteToSecond(minute) {
      return minute * 60
    },

    convertSecondToMinute(second) {
      return Math.floor(second / 60)
    },

    reupdateMobTimerMinute() {
      this.timer = this.convertMinuteToSecond(this.mobTimerMinute)
      this.isTimer = false
      this.isTimerStop = false
      this.clearIntervalTimer()
    },
  },
}
</script>
