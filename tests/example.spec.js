/* global
      $j
      beforeEach
      describe
      it
      expect
      jasmine
 */

import App from '../resources/assets/js/app.js'

function setUpHTMLFixture () {
  jasmine.getFixtures().set(require('./fixture.html'))
}

function getApp (opts, state) {
  let options = Object.assign({}, {
    el: '#vue-app'
  }, opts || {})
  let initialState = Object.assign({}, {
    message: 'Hello'
  }, state || {})
  return App.init(options, initialState)
}

describe('MortgageCalculator', function () {
  beforeEach(function () {
    setUpHTMLFixture()
  })

  it('Should initialize', function () {
    const app = getApp()
    expect('Hello').toEqual(app.message)
  })

  it('Should render data to view', function (done) {
    const app = getApp()
    expect($j('#vue-app').html().trim()).toEqual(app.message)

    // update message requires nextTick
    app.message = 'New message'
    app.$nextTick(function () {
      expect($j('#vue-app').html().trim()).toEqual(app.message)
      done()
    })
  })
})
