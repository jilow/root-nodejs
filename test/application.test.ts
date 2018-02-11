import * as assert from 'assert'
import axios from 'axios'
import * as moxios from 'moxios'
import * as sinon from 'sinon'
import * as Root from '../src'
import * as helper from './helper'

const APP_ID = 'app_id'
const APP_TOKEN = 'app_secret'

describe('Root.InsuranceAPI - Application', () => {

  let client

  before(() => {
    client = new Root.InsuranceAPI(APP_ID, APP_TOKEN)
  })

  beforeEach(() => {
    moxios.install(axios)
  })

  afterEach(() => {
    moxios.uninstall(axios)
  })

  it('#createApplication()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.createApplication(
        'bf1ada91-eecb-4f47-9bfa-1258bb1e0055',
        'f4397823-db4a-4d6a-a06b-08e1a2a3172c',
        50000,
        '1234567890',
      ).then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

})
