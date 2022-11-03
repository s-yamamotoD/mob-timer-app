<template>
  <v-main>
    <h1>Home</h1>
    <MinuteSettingBtn
      left-label="Mob timer"
      right-label="minutes"
      @change="setTimer"
    ></MinuteSettingBtn>

    <MinuteSettingBtn
      :default-minute="5"
      left-label="Break after"
      right-label="typists (10 minutes)"
    ></MinuteSettingBtn>

    <MinuteSettingBtn
      left-label="Coffee break"
      right-label="minutes"
    ></MinuteSettingBtn>

    <div>{{ formatTimer }}</div>

    <v-btn v-if="!isTimer" @click="startTimer">Start Session</v-btn>
    <div v-if="isTimer">
      <v-btn v-if="!isTimerStop" @click="stopTimer">Pause</v-btn>
      <v-btn v-if="isTimerStop" @click="continueTimer">Continue</v-btn>
      <v-btn @click="resetTimer">Reset Mob Session</v-btn>
    </div>
  </v-main>
</template>

<script>
import MinuteSettingBtn from "@/components/MinuteSettingBtn"

const DEFAULT_TIMER = 1500

export default {
  name: "Home",

  components: {
    MinuteSettingBtn,
  },

  data: () => ({
    timer: DEFAULT_TIMER,
    timerID: null,
    isTimer: false,
    isTimerStop: false,
  }),

  computed: {
    formatTimer() {
      const minute = this.timer / 60
      const second = this.timer % 60
      return `${minute}:${second}`
    },

    timerStopLabel() {
      return this.isTimerStop ? "Pause" : "Continue"
    },
  },

  methods: {
    setTimer(minute) {
      this.timer = minute
    },

    createIntervalTimer() {
      this.timerID = setInterval(() => {
        this.timer -= 60
      }, 1000)
    },

    startTimer() {
      this.isTimer = true
      this.createIntervalTimer()
    },

    stopTimer() {
      this.isTimerStop = true
      clearInterval(this.timerID)
    },

    continueTimer() {
      this.isTimerStop = false
      this.createIntervalTimer()
    },

    resetTimer() {
      this.timer = DEFAULT_TIMER
      this.isTimer = false
      this.isTimerStop = false
      clearInterval(this.timerID)
    },
  },
}
</script>
