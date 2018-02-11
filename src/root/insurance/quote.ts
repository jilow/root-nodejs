import Client from '../utils/client'

export default class Quote extends Client {

  public async createQuote(opts: any) {
    switch (opts.type) {
      case 'root_gadgets': return this.createGadgetQuote(opts)
      case 'root_term': return this.createTermQuote(opts)
      case 'root_funeral': return this.createFuneralQuote(opts)
      default: throw new TypeError(`Unknown quote type: ${opts.type}`)
    }
  }

  public async listGadgetModels() {
    return this.get('gadgets/models')
  }

  public async createGadgetQuote(opts: any) {
    return this.post('quotes', {
      type:         'root_gadgets',
      model_name:   opts.model_name,
    })
  }

  public async createTermQuote(opts: any) {
    return this.post('quotes', {
      type:             'root_term',
      cover_amount:     opts.cover_amount,
      cover_period:     opts.cover_period,
      education_status: opts.education_status,
      smoker:           opts.smoker,
      gender:           opts.gender,
      age:              opts.age,
      basic_income_per_month: opts.basic_income_per_month,
    })
  }

  public async createFuneralQuote(opts: any) {
    return this.post('quotes', {
      type:                 'root_funeral',
      cover_amount:         opts.cover_amount,
      has_spouse:           opts.has_spouse,
      number_of_children:   opts.number_of_children,
      extended_family_ages: opts.extended_family_ages,
    })
  }

}
