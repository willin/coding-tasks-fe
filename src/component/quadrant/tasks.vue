<template>
  <v-list two-line>
    <template v-for="task in tasks">
      <v-list-tile avatar v-bind:key="task.content">
        <v-list-tile-avatar>
          <img v-bind:src="task.owner.avatar" />
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{task.content}}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            #{{task.number}}
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action v-text="task.project.name"></v-list-tile-action>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['list'],
  name: 'tasks',
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'users',
      'projects'
    ]),
    tasks() {
      return this.list.map((task) => {
        /* eslint-disable no-param-reassign */
        task.owner = this.users.find(x => x.id === task.owner_id);
        task.project = this.projects.find(x => x.id === task.project_id);
        return task;
      });
    }
  }
};
</script>
