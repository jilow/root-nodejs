"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../utils/client");
const application_1 = require("./application");
const claim_1 = require("./claim");
const policy_1 = require("./policy");
const policy_holder_1 = require("./policy_holder");
const quote_1 = require("./quote");
class API extends client_1.default {
    constructor() {
        super(...arguments);
        // Application
        this.createApplication = application_1.default.prototype.createApplication;
        // Claim
        this.listClaims = claim_1.default.prototype.listClaims;
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
        this.updatePolicyBillingAmount = policy_1.default.prototype.updatePolicyBillingAmount;
        this.listPolicyBeneficiaries = policy_1.default.prototype.listPolicyBeneficiaries;
        this.listPolicyEvents = policy_1.default.prototype.listPolicyEvents;
        // PolicyHolder
        this.createPolicyHolder = policy_holder_1.default.prototype.createPolicyHolder;
        this.listPolicyHolders = policy_holder_1.default.prototype.listPolicyHolders;
        this.getPolicyHolder = policy_holder_1.default.prototype.getPolicyHolder;
        this.updatePolicyHolder = policy_holder_1.default.prototype.updatePolicyHolder;
        this.listPolicyHolderEvents = policy_holder_1.default.prototype.listPolicyHolderEvents;
        // Quote
        this.createQuote = quote_1.default.prototype.createQuote;
        this.listGadgetModels = quote_1.default.prototype.listGadgetModels;
        this.createGadgetQuote = quote_1.default.prototype.createGadgetQuote;
        this.createTermQuote = quote_1.default.prototype.createTermQuote;
        this.createFuneralQuote = quote_1.default.prototype.createFuneralQuote;
    }
    get apiType() {
        return 'insurance';
    }
}
exports.default = API;
