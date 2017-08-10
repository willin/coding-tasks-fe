<template>
  <v-app light>
    <v-toolbar fixed>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="goRoute('/')">
        <v-icon>pages</v-icon>
      </v-btn>
      <v-btn icon @click="goRoute('/timeline')">
        <v-icon>format_list_numbered</v-icon>
      </v-btn>
      <v-btn icon @click="goRoute('/statistics')">
        <v-icon>poll</v-icon>
      </v-btn>
    </v-toolbar>
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
