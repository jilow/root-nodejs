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
class Claim extends client_1.default {
    listClaims(claim_status = null, approval_status = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('claims', {
                claim_status,
                approval_status,
            });
        });
    }
    getClaim(claim_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`claims/${claim_id}`);
        });
    }
    openClaim(policy_id = null, policy_holder_id = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('claims', {
                policy_id,
                policy_holder_id,
            });
        });
    }
    linkPolicyToClaim(claim_id, policy_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(`claims/${claim_id}/policy`, {
                policy_id,
            });
        });
    }
    linkPolicyHolderToClaim(claim_id, policy_holder_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post(`claims/${claim_id}/policyholder`, {
                policy_holder_id,
            });
        });
    }
    listClaimEvents(claim_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`claims/${claim_id}/events`);
        });
    }
}
exports.default = Claim;
