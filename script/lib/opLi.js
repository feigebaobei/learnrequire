define(['jquery', 'students'], function ($, std) {
  let ul = '<ul></ul>'
  ul = std.reduce((total, currentValue, currentIndex, arr) => {
    return total + `<li>${currentValue.name} ${currentValue.age}</li>`
  }, '')
  $('body').append(ul)
})