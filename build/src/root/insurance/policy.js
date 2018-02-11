"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../utils/client");
class Policy extends client_1.default {
    issuePolicy(application_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('policies', {
                application_id,
            });
        });
    }
    addPolicyBeneficiary(policy_id, id, first_name, last_name, percentage) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(id instanceof Object)) {
                throw new TypeError(`Expected ID to be of type object: ${id}`);
            }
            return this.put(`policies/${policy_id}/beneficiaries`, {
                id,
                first_name,
                last_name,
                percentage,
            });
        });
    }
    listPolicies() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('policies');
        });
    }
    getPolicy(policy_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`policies/${policy_id}`);
        });
    }
    cancelPolicy(policy_id, reason) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(`policies/${policy_id}/cancel`, {
                reason,
            });
        });
    }
    replacePolicy(policy_id, quote_package_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(`policies/${policy_id}/replace`, {
                quote_package_id,
            });
        });
    }
    updatePolicyBillingAmount(policy_id, billing_amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(`policies/${policy_id}/billing_amount`, {
                billing_amount,
            });
        });
    }
    listPolicyBeneficiaries(policy_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`policies/${policy_id}/beneficiaries`);
        });
    }
    listPolicyEvents(policy_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`policies/${policy_id}/events`);
        });
    }
}
exports.default = Policy;
