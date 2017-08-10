<template>
  <div class="flex-grid">
    <div class="grid-item">
      1
    </div>
    <div class="grid-item">
      2
    </div>
    <div class="grid-item">
      3
    </div>
    <div class="grid-item">
      4
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="stylus">
main {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  padding-top: 70px;
}
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
}
.grid-item {
  margin: 1em;
  border: 1px solid #000;
  display: flex;
  flex-basis: calc(50%);
  justify-content: center;
  flex-direction: column;
}
</style>

