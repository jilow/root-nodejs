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
const axios_1 = require("axios");
const auth_error_1 = require("../errors/auth_error");
const input_error_1 = require("../errors/input_error");
const ENV = process.env.NODE_ENV;
class Client {
    constructor(appId, appSecret, env = 'sandbox') {
        this.appId = appId;
        this.appSecret = appSecret;
        this.env = env;
    }
    post(entity, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('POST', entity, data);
        });
    }
    put(entity, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('PUT', entity, data);
        });
    }
    patch(entity, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('PATCH', entity, data);
        });
    }
    get(entity, query = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.makeRequest('GET', entity, query);
        });
    }
    get apiAuth() {
        return {
            username: this.appId,
            password: this.appSecret,
        };
    }
    get apiType() {
        return 'insurance';
    }
    get apiRoot() {
        return ENV === 'production' ? 'https://api.root.co.za' : `https://${this.env}.root.co.za`;
    }
    get apiVersion() {
        return 'v1';
    }
    get apiPath() {
        return `${this.apiRoot}/${this.apiVersion}/${this.apiType}`;
    }
    makeRequest(method, entity, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.request(this.generateOptions(method, entity, data));
                return this.parseResponse(response);
            }
            catch (err) {
                return this.parseResponse(err.response);
            }
        });
    }
    generateOptions(method, entity, data) {
        return {
            method,
            url: `${this.apiPath}/${entity}`,
            auth: this.apiAuth,
            params: method === 'GET' ? data : null,
            data: method !== 'GET' ? data : null,
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        };
    }
    parseResponse(res) {
        switch (res.status) {
            case 200: return res.data;
            case 400: throw new input_error_1.default(this.errorMessage(res.data));
            case 401: throw new auth_error_1.default(this.errorMessage(res.data));
            case 403: throw new auth_error_1.default(this.errorMessage(res.data));
            default: throw new Error(this.errorMessage(res.data));
        }
    }
    errorMessage(data) {
        return data.error || data.message;
    }
}
exports.default = Client;
