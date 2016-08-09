/* global
      $j
      beforeEach
      describe
      it
      expect
      jasmine
 */

import App from '../resources/assets/js/app.js'
import merge from 'merge'

function setUpHTMLFixture () {
  jasmine.getFixtures().set(require('./fixture.html'))
}

function getApp (state, opts = {}) {
  let options = merge({}, {
    el: '#vue-app'
  }, opts)
  let initialState = merge({}, {
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

  it('Should allow deep data object', function () {
    const app = getApp({
      messages: [
        {
          message: {
            en: 'Hello World',
            es: 'Hola Mundo'
          }
        }
      ]
    })
    expect('Hello World').toEqual(app.messages[0].message.en)
    expect('Hola Mundo').toEqual(app.messages[0].message.es)
  })

  it('Should render data to view', function (done) {
    const app = getApp()
    expect($j('#message').val()).toEqual(app.message)

    // update message requires nextTick
    app.message = 'New message'
    app.$nextTick(function () {
      expect($j('#message').val()).toEqual(app.message)
      done()
    })
  })

  it('Should update model when input value changes', function (done) {
    const app = getApp()
    expect($j('#message').val()).toEqual(app.message)

    // update message requires nextTick
    $j('#message').val('New message').trigger('change')
    app.$nextTick(function () {
      expect(app.message).toEqual('New message')
      done()
    })
  })
})
