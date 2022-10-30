<template>
  <v-main>
    <h1>Home</h1>
    <MinuteSettingBtn></MinuteSettingBtn>
    <MinuteSettingBtn :default-minute="5"></MinuteSettingBtn>
    <MinuteSettingBtn></MinuteSettingBtn>
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
