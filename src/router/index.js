import Vue from 'vue';
import Router from 'vue-router';
import layout from '../component/layout.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: layout,
      children: [
        {
          path: '/todo/:id',
          name: 'todo'
          // component: todo
        }
      ]
    }
  ]
});
