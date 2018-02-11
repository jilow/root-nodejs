import Client from '../utils/client'

export default class Application extends Client {

  public async createApplication(
        policyholder_id: string, quote_package_id: string,
        monthly_premium: number, serial_number: number) {
    return this.post('applications', {
      policyholder_id,
      quote_package_id,
      monthly_premium,
      serial_number,
    })
  }

}
