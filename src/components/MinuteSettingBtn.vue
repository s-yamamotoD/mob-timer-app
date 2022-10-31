<template>
  <div class="contents">
    <span>{{ leftLabel }}</span>
    <div class="items px-3">
      <v-btn fab color="primary" small @click="incrementMinute">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-text-field
        class="centered-input"
        outlined
        hide-details="false"
        v-model="minute"
      ></v-text-field>
      <v-btn cols="1" fab color="primary" small @click="decrementMinute">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
    </div>
    <span>{{ rightLabel }}</span>
  </div>
</template>

<script>
export default {
  name: "MinuteSettingBtn",
  props: {
    defaultMinute: {
      type: Number,
      default: 25,
    },
    leftLabel: {
      type: String,
      default: "",
    },
    rightLabel: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    minute: 0,
  }),
  created() {
    this.minute = this.defaultMinute
  },
  methods: {
    incrementMinute() {
      this.minute = ++this.minute
    },
    decrementMinute() {
      this.minute = --this.minute
    },
  },
}
</script>

<style scoped>
.contents {
  display: flex;
  align-items: center;
}
.items {
  width: 180px;
  display: flex;
  align-items: center;
}
</style>
<style>
.centered-input input {
  text-align: center;
}
</style>
