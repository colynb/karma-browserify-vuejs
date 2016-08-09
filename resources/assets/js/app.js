import Vue from 'vue'

const DEFAULT_OPTIONS = {
  el: '#app'
}

const App = {
  init: function (options, initialState) {
    options = Object.assign({}, DEFAULT_OPTIONS, options)
    return new Vue({
      el: options.el,
      data: Object.assign({}, initialState || {})
    })
  }
}

export default App
