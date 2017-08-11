<template>
    <div class="flex">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="stylus" scoped>
.flex
  height calc(100vh - 74px)
  display flex
  flex-flow column wrap
  justify-content space-around
  align-content space-around
  align-items center

.box
  width 49%
  height 49%

@media only screen and (max-device-width: 768px)
  .flex
    height auto;
  .box
    height calc(100vh - 74px)
    width 100%
</style>
