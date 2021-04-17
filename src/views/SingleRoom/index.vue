<template>
  <div class="singleRoom">
    <article class="bookRoom">
      <BackgroundImage />
    </article>
    <article class="roomDate">
      <RoomDate />
    </article>
  </div>
</template>

<script>
import BackgroundImage from '../../components/backgroundImage/index.vue'
import RoomDate from '../../components/roomDate/index.vue'

export default {
  name: 'SingleRoom',
  components: {
    BackgroundImage,
    RoomDate,
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>