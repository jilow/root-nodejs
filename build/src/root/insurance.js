"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./insurance/application");
const claim_1 = require("./insurance/claim");
const policy_1 = require("./insurance/policy");
const policyholder_1 = require("./insurance/policyholder");
const quote_1 = require("./insurance/quote");
const client_1 = require("./utils/client");
class Insurance extends client_1.Client {
    constructor() {
        super(...arguments);
        // Application
        this.createApplication = application_1.default.prototype.createApplication;
        // Claim
        this.listCliams = claim_1.default.prototype.listClaims;
        this.getClaim = claim_1.default.prototype.getClaim;
        this.openClaim = claim_1.default.prototype.openClaim;
        this.linkPolicyToClaim = claim_1.default.prototype.linkPolicyToClaim;
        this.linkPolicyHolderToClaim = claim_1.default.prototype.linkPolicyHolderToClaim;
        this.listClaimEvents = claim_1.default.prototype.listClaimEvents;
        // Policy
        this.issuePolicy = policy_1.default.prototype.issuePolicy;
        this.addPolicyBeneficiary = policy_1.default.prototype.addPolicyBeneficiary;
        this.listPolicies = policy_1.default.prototype.listPolicies;
        this.getPolicy = policy_1.default.prototype.getPolicy;
        this.cancelPolicy = policy_1.default.prototype.cancelPolicy;
        this.replacePolicy = policy_1.default.prototype.replacePolicy;
        this.updatePolicy = policy_1.default.prototype.updatePolicy;
        this.listPolicyBeneficiaries = policy_1.default.prototype.listPolicyBeneficiaries;
        this.listPolicyEvents = policy_1.default.prototype.listPolicyEvents;
        // Policyholder
        this.createPolicyHolder = policyholder_1.default.prototype.createPolicyHolder;
        this.listPolicyHolders = policyholder_1.default.prototype.listPolicyHolders;
        this.getPolicyHolder = policyholder_1.default.prototype.getPolicyHolder;
        this.updatePolicyHolder = policyholder_1.default.prototype.updatePolicyHolder;
        this.listPolicyHolderEvents = policyholder_1.default.prototype.listPolicyHolderEvents;
        // Quote
        this.createQuote = quote_1.default.prototype.createQuote;
        this.listGadgetModels = quote_1.default.prototype.listGadgetModels;
    }
}
exports.Insurance = Insurance;
