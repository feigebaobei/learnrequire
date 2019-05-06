require.config({
  baseUrl: '../script/',
  paths: {
    'util': 'lib/',
    'jquery': 'https://cdn.bootcss.com/jquery/3.4.1/jquery',
    'students': '../asset/student',
    'underscore': 'https://cdn.bootcss.com/underscore.js/1.9.1/underscore'
    // 'students': 'student'
  },
  shim: {

  }
})
// require(['util/first', 'jquery', '../asset/student'], function (first, $, students) {
require(['util/first', 'jquery', 'students', 'util/opLi', 'underscore'], function (first, $, students, opLi, _) {
  console.log($('body'))
  console.log(first)
  console.log(students)
  let newArr = _.map([1,2,3], (x) => x*x)
  console.log(newArr)
})