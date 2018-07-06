const Button = resolve => require(['../views/button'], resolve)
const Badge = resolve => require(['../views/badge'], resolve)
const Popover = resolve => require(['../views/popover'], resolve)
export default [
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/badge',
    name: 'Badge',
    component: Badge
  },
  {
    path: '/popover',
    name: 'popover',
    component: Popover
  }
]
