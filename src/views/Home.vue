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
    <v-btn v-if="isTimer" @click="isTimerStop = !isTimerStop">{{
      timerStopLabel
    }}</v-btn>
    <v-btn v-if="isTimer" @click="resetTimer">Reset Mob Session</v-btn>
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

    startTimer() {
      this.isTimer = true
    },

    resetTimer() {
      this.timer = DEFAULT_TIMER
      this.isTimer = false
      this.isTimerStop = false
    },
  },
}
</script>
