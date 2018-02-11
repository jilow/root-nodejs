import Client from '../utils/client'

export default class Claim extends Client {

  public async listClaims(claim_status: string = null, approval_status: string = null) {
    return this.get('claims', {
      claim_status,
      approval_status,
    })
  }

  public async getClaim(claim_id: string) {
    return this.get(`claims/${claim_id}`)
  }

  public async openClaim(policy_id: string = null, policy_holder_id: string = null) {
    return this.post('claims', {
      policy_id,
      policy_holder_id,
    })
  }

  public async linkPolicyToClaim(claim_id: string, policy_id: string) {
    return this.post(`claims/${claim_id}/policy`, {
      policy_id,
    })
  }

  public async linkPolicyHolderToClaim(claim_id: string, policy_holder_id: string) {
    return this.post(`claims/${claim_id}/policyholder`, {
      policy_holder_id,
    })
  }

  public async listClaimEvents(claim_id: string) {
    return this.get(`claims/${claim_id}/events`)
  }

}
