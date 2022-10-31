<template>
  <v-main>
    <h1>Home</h1>
    <MinuteSettingBtn
      left-label="Mob timer"
      right-label="minutes"
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
  </v-main>
</template>

<script>
import MinuteSettingBtn from "@/components/MinuteSettingBtn"
export default {
  name: "Home",
  components: {
    MinuteSettingBtn,
  },
  data: () => ({
    //
  }),
}
</script>
