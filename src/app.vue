<template>
  <v-app light>
    <v-toolbar fixed>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="goRoute('/quadrant')">
        <v-icon>pages</v-icon>
      </v-btn>
      <v-btn icon @click="goRoute('/timeline')">
        <v-icon>format_list_numbered</v-icon>
      </v-btn>
      <v-btn icon @click="goRoute('/statistics')">
        <v-icon>poll</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
    <v-progress-linear value="45" height="10" info>
    </v-progress-linear>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.name
    };
  },
  methods: {
    goRoute(route) {
      this.$router.push(route);
    }
  },
  watch: {
    $route() {
      this.title = this.$route.name;
    }
  }
};
</script>

<style lang="stylus">
@import '../node_modules/vuetify/src/stylus/main'
.progress-linear{
  margin 0 !important
  position fixed
  bottom 0
  left 0
}
main
  padding-bottom 10px
</style>
