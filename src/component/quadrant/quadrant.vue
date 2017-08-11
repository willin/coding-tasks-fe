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
          <template v-for="item in items">
            <v-subheader v-if="item.header" v-text="item.header" :key="item.id"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset" :key="item.id"></v-divider>
            <v-list-tile avatar v-else v-bind:key="item.title" href="javascript:;" download target="_blank">
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar">
              </v-list-tile-avatar>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
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
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          avatar: '/static/doc-images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: '<span class=\'grey--text text--darken-2\'>Ali Connors</span> — I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
        },
        { divider: true, inset: true },
        {
          id: 2,
          avatar: '/static/doc-images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: '<span class=\'grey--text text--darken-2\'>to Alex, Scott, Jennifer</span> — Wish I could come, but I\'m out of town this weekend.'
        },
        { divider: true, inset: true },
        {
          id: 3,
          avatar: '/static/doc-images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class=\'grey--text text--darken-2\'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?'
        }
      ]
    };
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

@media only screen and (max-device-width: 768px)
  .flex
    height auto;
  .box
    height calc(100vh - 74px)
    width 100%
</style>
