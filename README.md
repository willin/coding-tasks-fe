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
