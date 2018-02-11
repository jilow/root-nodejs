import axios from 'axios'
import AuthError from '../errors/auth_error'
import InputError from '../errors/input_error'

const ENV = process.env.NODE_ENV

export default class Client {

  public appId: string
  public appSecret: string
  public env: string

  constructor(appId: string, appSecret: string, env: string = 'sandbox') {
    this.appId = appId
    this.appSecret = appSecret
    this.env = env
  }

  public async post(entity: string, data: object) {
    return this.makeRequest('POST', entity, data)
  }

  public async put(entity: string, data: object) {
    return this.makeRequest('PUT', entity, data)
  }

  public async patch(entity: string, data: object) {
    return this.makeRequest('PATCH', entity, data)
  }

  public async get(entity: string, query: object = null) {
    return this.makeRequest('GET', entity, query)
  }

  get apiAuth() {
    return {
      username: this.appId,
      password: this.appSecret,
    }
  }

  get apiType() {
    return 'insurance'
  }

  get apiRoot() {
    return ENV === 'production' ? 'https://api.root.co.za' : `https://${this.env}.root.co.za`
  }

  get apiVersion() {
    return 'v1'
  }

  get apiPath() {
    return `${this.apiRoot}/${this.apiVersion}/${this.apiType}`
  }

  private async makeRequest(method: string, entity: string, data: object) {
    try {
      const response = await axios.request(this.generateOptions(method, entity, data))
      return this.parseResponse(response)
    } catch (err) {
      return this.parseResponse(err.response)
    }
  }

  private generateOptions(method: string, entity: string, data: object) {
    return {
      method,
      url: `${this.apiPath}/${entity}`,
      auth: this.apiAuth,
      params: method === 'GET' ? data : null,
      data: method !== 'GET' ? data : null,
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    }
  }

  private parseResponse(res: any): any {
    switch (res.status) {
      case 200: return res.data
      case 400: throw new InputError(this.errorMessage(res.data))
      case 401: throw new AuthError(this.errorMessage(res.data))
      case 403: throw new AuthError(this.errorMessage(res.data))
      default: throw new Error(this.errorMessage(res.data))
    }
  }

  private errorMessage(data): string {
    return data.error || data.message
  }

}
