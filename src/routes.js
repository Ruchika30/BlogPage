// In your routes configuration file
const path = require("path")
module.exports = [
  {
    path: "/order",
    component: path.resolve(`src/pages/404.js`),
  },
  {
    path: "/blog",
    component: path.resolve(`src/pages/404.js`),
  },
  {
    path: "/404/",
    component: path.resolve(`src/pages/404.js`),
  },
]
