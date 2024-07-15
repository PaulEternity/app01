export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          { name: '登录', path: '/user/login', component: './User/Login' },
          { name: '注册', path: '/user/register', component: './User/Register' }, //path是在网址栏中的，component是文件位置，类似于Django的注册
        ],
      },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', component: './Welcome' },
  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      // {path: '/admin', redirect: '/admin/sub-page'},
      { path: '/admin/user-manage', name: '用户管理', component: './Admin/UserManage' },
      { component: './404' },
    ],
  },
  { name: '查询表格', icon: 'table', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
