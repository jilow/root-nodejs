import Client from '../utils/client'

export default class PolicyHolder extends Client {

  public async createPolicyHolder(
        id: object, first_name: string = null,
        last_name: string = null, email: string = null,
        date_of_birth: string = null, cellphone: string = null) {
    if (!(id instanceof Object)) {
      throw new TypeError(`Expected ID to be of type object: ${id}`)
    }
    return this.post('policyholders', {
      id,
      first_name,
      last_name,
      date_of_birth,
      email,
      cellphone,
    })
  }

  public async listPolicyHolders() {
    return this.get('policyholders')
  }

  public async getPolicyHolder(policy_holder_id: string) {
    return this.get(`policyholders/${policy_holder_id}`)
  }

  public async updatePolicyHolder(policy_holder_id: string, email: string, cellphone: string) {
    return this.patch(`policyholders/${policy_holder_id}`, {
      email,
      cellphone,
    })
  }

  public async listPolicyHolderEvents(policy_holder_id: string) {
    return this.get(`policyholders/${policy_holder_id}/events`)
  }

}
