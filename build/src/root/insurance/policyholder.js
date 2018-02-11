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
class PolicyHolder extends client_1.default {
    createPolicyHolder(id, first_name = null, last_name = null, email = null, date_of_birth = null, cellphone = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(id instanceof Object)) {
                throw new TypeError(`Expected ID to be of type object: ${id}`);
            }
            return this.post('policyholders', {
                id,
                first_name,
                last_name,
                date_of_birth,
                email,
                cellphone,
            });
        });
    }
    listPolicyHolders() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('policyholders');
        });
    }
    getPolicyHolder(policy_holder_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`policyholders/${policy_holder_id}`);
        });
    }
    updatePolicyHolder(policy_holder_id, email, cellphone) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.patch(`policyholders/${policy_holder_id}`, {
                email,
                cellphone,
            });
        });
    }
    listPolicyHolderEvents(policy_holder_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(`policyholders/${policy_holder_id}/events`);
        });
    }
}
exports.default = PolicyHolder;
