import Vue from 'vue'
import merge from 'merge'

const DEFAULT_OPTIONS = {
  el: '#app'
}

const App = {
  init: function (options, initialState) {
    options = merge({}, DEFAULT_OPTIONS, options)
    return new Vue({
      el: options.el,
      data: merge({}, initialState || {})
    })
  }
}

export default App
