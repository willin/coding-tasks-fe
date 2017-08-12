# vuetify-demo

一个基于 vue 搭建的 Coding.net 任务管理系统

## 路由设计

```bash
/quadrant # 四象限展示
  # 复合路由
  /team/:team
  /project/:project
  /user/:user
  /status/:status
  /priority/:priority
  /deadline/:date
  /label/:label
  /order/:filter/(:order)? # :order desc/asc 默认为 desc
  # 复合路由示例
  /user/:user/project/:project
/timeline # 时间轴展示
  # 复合路由
  /team/:team
  /project/:project
  /user/:user
  /status/:status
  /priority/:priority
  /deadline/:date
  /label/:label
  /order/:filter/(:order)? # :order desc/asc 默认为 desc
  # 复合路由示例
  /user/:user/project/:project
/statistics #统计信息
  /team/:team
  /project/:project
  /user/:user
```

## TODOs

### UI

- 过场动画
  - [ ] 加载进度条
  - [ ] 路由切换过渡
- [ ] 四象限UI
  - [ ] 筛选 (权重, 项目, 团队, 用户, 标签, 状态等)
- [ ] 时间轴UI
  - [ ] 筛选 (与四象限大部分重叠)
- 统计模块 
  - [x] 图表引入 (如:Echarts) #85ab677
  - [ ] 用户统计
  - [ ] 项目统计
  - [ ] 团队综合统计

### 功能

- [x] 数组筛选方法 #10a7df4
- [x] Webpack打包优化 #9cc3c92 #85ab677

- [ ] 任务按时间排序
- [ ] 筛选路由匹配
