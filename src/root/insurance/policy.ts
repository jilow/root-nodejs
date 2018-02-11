import Client from '../utils/client'

export default class Policy extends Client {

  public async issuePolicy(application_id: string) {
    return this.post('policies', {
      application_id,
    })
  }

  public async addPolicyBeneficiary(
        policy_id: string, id: object, first_name: string,
        last_name: string, percentage: number) {
    if (!(id instanceof Object)) {
      throw new TypeError(`Expected ID to be of type object: ${id}`)
    }
    return this.put(`policies/${policy_id}/beneficiaries`, {
      id,
      first_name,
      last_name,
      percentage,
    })
  }

  public async listPolicies() {
    return this.get('policies')
  }

  public async getPolicy(policy_id: string) {
    return this.get(`policies/${policy_id}`)
  }

  public async cancelPolicy(policy_id: string, reason: string) {
    return this.post(`policies/${policy_id}/cancel`, {
      reason,
    })
  }

  public async replacePolicy(policy_id: string, quote_package_id: string) {
    return this.post(`policies/${policy_id}/replace`, {
      quote_package_id,
    })
  }

  public async updatePolicyBillingAmount(policy_id: string, billing_amount: number) {
    return this.post(`policies/${policy_id}/billing_amount`, {
      billing_amount,
    })
  }

  public async listPolicyBeneficiaries(policy_id: string) {
    return this.get(`policies/${policy_id}/beneficiaries`)
  }

  public async listPolicyEvents(policy_id: string) {
    return this.get(`policies/${policy_id}/events`)
  }

}
