window.onload = function () {
  init()
}

function init() {
  keySearch()
}

var keySearch = (function () {
  var searchKw = document.getElementById('J_search_kw'),
    autoKw = document.getElementById('J_auto_kw'),
    recomKw = JSON.parse(document.getElementById('J_recomKw').innerHTML),
    kwOrder = 0,
    t = null

    console.log(recomKw);

  function setAutoKws() {
    autoKwChange()
    t = setInterval(autoKwChange, 1000)
  }
  function autoKwChange() {
    var len = recomKw.length
    autoKw.innerHTML = recomKw[kwOrder]

    kwOrder = kwOrder >= len - 1 ? 0 : kwOrder + 1
  }

  return function () {
    setAutoKws()
  }
})()
