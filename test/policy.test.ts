import * as assert from 'assert'
import axios from 'axios'
import * as moxios from 'moxios'
import * as sinon from 'sinon'
import * as Root from '../src'
import * as helper from './helper'

const APP_ID = 'app_id'
const APP_TOKEN = 'app_secret'

describe('Root.InsuranceAPI - Policy', () => {

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

  it('#issuePolicy()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.issuePolicy('bf1ada91-eecb-4f47-9bfa-1258bb1e0055').then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#addPolicyBeneficiary()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.addPolicyBeneficiary(
        'bf1ada91-eecb-4f47-9bfa-1258bb1e0055',
        {type: 'id', number: '8704094800082', country: 'ZA'},
        'Jared',
        'Dunn',
        100,
      ).then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#listPolicies()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.listPolicies().then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#getPolicy()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.getPolicy('128ba0c0-3f6a-4f8b-9b40-e2066b02b59e').then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#cancelPolicy()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.cancelPolicy('128ba0c0-3f6a-4f8b-9b40-e2066b02b59e').then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#replacePolicy()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.replacePolicy(
        '128ba0c0-3f6a-4f8b-9b40-e2066b02b59e',
        '8b922b9d-e874-4b06-87d0-e1f16a2d57db',
      ).then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#updatePolicyBillingAmount()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.updatePolicyBillingAmount(
        '128ba0c0-3f6a-4f8b-9b40-e2066b02b59e',
        450 * 10,
      ).then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#listPolicyBeneficiaries()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.listPolicyBeneficiaries('128ba0c0-3f6a-4f8b-9b40-e2066b02b59e').then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#listPolicyEvents()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.listPolicyEvents('128ba0c0-3f6a-4f8b-9b40-e2066b02b59e').then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

})
