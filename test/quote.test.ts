import * as assert from 'assert'
import axios from 'axios'
import * as moxios from 'moxios'
import * as sinon from 'sinon'
import * as Root from '../src'
import * as helper from './helper'

const APP_ID = 'app_id'
const APP_TOKEN = 'app_secret'

describe('Root.InsuranceAPI - Quote', () => {

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

  it('#listGadgetModels()', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = [ { make: 'Apple', name: 'iPhone 5', value: 449900 } ]
      client.listGadgetModels().then((models) => {
        assert.deepEqual(stubData, models)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#createQuote() for root_gadgets', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      const options = { type: 'root_gadgets', model_name: 'iPhone 5' }
      client.createQuote(options).then((quote) => {
        assert.deepEqual(stubData, quote)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#createQuote() for root_term', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      const options = {
        type:             'root_term',
        cover_amount:     1000000 * 10,
        cover_period:     'one_year',
        education_status: 'grade_12_matric',
        smoker:           true,
        gender:           'male',
        age:              31,
        basic_income_per_month: 200000 * 10,
      }
      client.createQuote(options).then((quote) => {
        assert.deepEqual(stubData, quote)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

  it('#createQuote() for root_funeral', (done) => {
    moxios.withMock(() => {
      const onFulfilled = sinon.spy()
      const stubData = {}
      const options = {
        type:                 'root_funeral',
        cover_amount:         1000000 * 10,
        has_spouse:           true,
        number_of_children:   2,
        extended_family_ages: [ 30, 21 ],
      }
      client.createQuote(options).then((quote) => {
        assert.deepEqual(stubData, quote)
      }).then(onFulfilled)
      moxios.wait(helper.mock.bind(this, onFulfilled, stubData, done))
    })
  })

})
