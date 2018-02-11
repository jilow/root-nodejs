import * as assert from 'assert'
import axios from 'axios'
import * as moxios from 'moxios'
import * as sinon from 'sinon'
import * as Root from '../src'
import * as helper from './helper'

const APP_ID = 'app_id'
const APP_TOKEN = 'app_secret'

describe('Root.InsuranceAPI - Claim', () => {

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

  it('#listClaims()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.listClaims().then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#getClaim()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.getClaim('d3d13c48-4dc3-4816-8d01-de321587822').then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#openClaim()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.openClaim(
        '8349345c-a6c5-4bf9-8ebb-6bbfc1628715',
        '8349345c-a6c5-4bf9-8ebb-6bbfc1628715',
      ).then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#linkPolicyToClaim()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.linkPolicyHolderToClaim(
        'd3d13c48-4dc3-4816-8d01-de321587822',
        '8349345c-a6c5-4bf9-8ebb-6bbfc1628715',
      ).then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#linkPolicyHolderToClaim()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.linkPolicyHolderToClaim(
        'd3d13c48-4dc3-4816-8d01-de321587822',
        '8349345c-a6c5-4bf9-8ebb-6bbfc1628715',
      ).then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#listClaimEvents()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      client.listClaimEvents('d3d13c48-4dc3-4816-8d01-de321587822').then((result) => {
        assert.deepEqual(stubData, result)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

})
