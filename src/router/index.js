import Vue from 'vue';
import Router from 'vue-router';
import layout from '../component/layout.vue';
import quadrant from '../component/quadrant';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Coding',
      component: layout,
      redirect: '/quadrant',
      children: [
        {
          path: '/quadrant/(.*)?',
          name: '四象限视图',
          component: quadrant
        },
        {
          path: '/timeline/(.*)?',
          name: '时间轴视图',
          component: quadrant
        },
        {
          path: '/statistics/(.*)?',
          name: '任务统计',
          component: quadrant
        }
      ]
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});

export default router;
