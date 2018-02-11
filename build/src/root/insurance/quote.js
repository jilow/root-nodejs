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
class Quote extends client_1.default {
    createQuote(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (opts.type) {
                case 'root_gadgets': return this.createGadgetQuote(opts);
                case 'root_term': return this.createTermQuote(opts);
                case 'root_funeral': return this.createFuneralQuote(opts);
                default: throw new TypeError(`Unknown quote type: ${opts.type}`);
            }
        });
    }
    listGadgetModels() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get('gadgets/models');
        });
    }
    createGadgetQuote(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('quotes', {
                type: 'root_gadgets',
                model_name: opts.model_name,
            });
        });
    }
    createTermQuote(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('quotes', {
                type: 'root_term',
                cover_amount: opts.cover_amount,
                cover_period: opts.cover_period,
                education_status: opts.education_status,
                smoker: opts.smoker,
                gender: opts.gender,
                age: opts.age,
                basic_income_per_month: opts.basic_income_per_month,
            });
        });
    }
    createFuneralQuote(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.post('quotes', {
                type: 'root_funeral',
                cover_amount: opts.cover_amount,
                has_spouse: opts.has_spouse,
                number_of_children: opts.number_of_children,
                extended_family_ages: opts.extended_family_ages,
            });
        });
    }
}
exports.default = Quote;
