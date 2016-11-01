'use strict'

module.exports = function handleObservable (val, done) {
  val = val || {}
  if (typeof val.subscribe !== 'function') {
    throw new TypeError('handle-observable: expect `val.subscribe` to be function')
  }
  if (typeof done !== 'function') {
    throw new TypeError('handle-observable: expect `done` to be function')
  }

  function onNext (state) {
    onNext.state = state
  }

  val.subscribe(onNext, done, function observableCallback () {
    done(null, onNext.state)
  })
}
