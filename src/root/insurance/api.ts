import Client from '../utils/client'
import Application from './application'
import Claim from './claim'
import Policy from './policy'
import PolicyHolder from './policy_holder'
import Quote from './quote'

export default class API extends Client {

  get apiType() {
    return 'insurance'
  }

  // Application
  public createApplication = Application.prototype.createApplication

  // Claim
  public listClaims = Claim.prototype.listClaims
  public getClaim = Claim.prototype.getClaim
  public openClaim = Claim.prototype.openClaim
  public linkPolicyToClaim = Claim.prototype.linkPolicyToClaim
  public linkPolicyHolderToClaim = Claim.prototype.linkPolicyHolderToClaim
  public listClaimEvents = Claim.prototype.listClaimEvents

  // Policy
  public issuePolicy = Policy.prototype.issuePolicy
  public addPolicyBeneficiary = Policy.prototype.addPolicyBeneficiary
  public listPolicies = Policy.prototype.listPolicies
  public getPolicy = Policy.prototype.getPolicy
  public cancelPolicy = Policy.prototype.cancelPolicy
  public replacePolicy = Policy.prototype.replacePolicy
  public updatePolicyBillingAmount = Policy.prototype.updatePolicyBillingAmount
  public listPolicyBeneficiaries = Policy.prototype.listPolicyBeneficiaries
  public listPolicyEvents = Policy.prototype.listPolicyEvents

  // PolicyHolder
  public createPolicyHolder = PolicyHolder.prototype.createPolicyHolder
  public listPolicyHolders = PolicyHolder.prototype.listPolicyHolders
  public getPolicyHolder = PolicyHolder.prototype.getPolicyHolder
  public updatePolicyHolder = PolicyHolder.prototype.updatePolicyHolder
  public listPolicyHolderEvents = PolicyHolder.prototype.listPolicyHolderEvents

  // Quote
  public createQuote = Quote.prototype.createQuote
  public listGadgetModels = Quote.prototype.listGadgetModels
  private createGadgetQuote = Quote.prototype.createGadgetQuote
  private createTermQuote = Quote.prototype.createTermQuote
  private createFuneralQuote = Quote.prototype.createFuneralQuote

}
