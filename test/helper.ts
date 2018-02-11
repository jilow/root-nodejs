import * as assert from 'assert'
import * as moxios from 'moxios'

export function mock(fulfillment, data, cb) {
  const request = moxios.requests.mostRecent()
  request.respondWith({
    status: 200,
    response: data,
  }).then(() => {
    assert.equal(fulfillment.called, true)
    cb()
  })
}
