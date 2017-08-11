<template>
  <div class="flex">
    <div class="box">
      <v-card>
        <v-toolbar class="pink lighten-2" dark>
          <v-toolbar-title>重要且紧急</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon class="coding icon important"></v-icon>
          <v-icon class="coding icon important"></v-icon>
          <v-icon class="coding icon important"></v-icon>
        </v-toolbar>
        <v-list two-line>
          <template v-for="task in tasksp3">
            <v-subheader v-if="task.content" v-text="task.content" :key="task.id"></v-subheader>
            <v-divider v-else-if="task.divider" v-bind:inset="task.inset" :key="task.id"></v-divider>
            <v-list-tile avatar v-else v-bind:key="task.content" href="javascript:;" download target="_blank">
              <v-list-tile-avatar>
                <img v-bind:src="task.avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="task.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="task.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </div>
    <div class="box">
      <v-card>
        <v-toolbar class="blue lighten-1" dark>
          <v-toolbar-title>重要不紧急</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon class="coding icon important"></v-icon>
          <v-icon class="coding icon important"></v-icon>
          <v-icon class="coding icon"></v-icon>
        </v-toolbar>
      </v-card>
    </div>
    <div class="box">
      <v-card>
        <v-toolbar class="yellow darken-2" dark>
          <v-toolbar-title>紧急不重要</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon class="coding icon important"></v-icon>
          <v-icon class="coding icon"></v-icon>
          <v-icon class="coding icon"></v-icon>
        </v-toolbar>
      </v-card>
    </div>
    <div class="box">
      <v-card>
        <v-toolbar class="light-green lighten-3" dark>
          <v-toolbar-title>不紧急不重要</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-icon class="coding icon"></v-icon>
          <v-icon class="coding icon"></v-icon>
          <v-icon class="coding icon"></v-icon>
        </v-toolbar>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'tasks'
    ]),
    tasksp3() {
      return this.tasks.filter(t => t.priority === 3).slice(0, 20);
    }
  }
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
  overflow-y scroll

@media only screen and (max-width: 768px)
  .flex
    height auto;
  .box
    height calc(100vh - 74px)
    width 100%
</style>
