import { utils } from 'near-api-js'

export class Contract {

  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }

  async getBeneficiary() {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: "get_beneficiary" })
  }

  async latestDonations() {
    const number_of_donors = await this.wallet.viewMethod({ contractId: this.contractId, method: "number_of_donors" })
    const min = number_of_donors > 10 ? number_of_donors - 9 : 0

    let donations = await this.wallet.viewMethod({ contractId: this.contractId, method: "get_donations", args: { from_index: min.toString(), limit: number_of_donors } })

    donations.forEach(elem => {
      elem.total_amount = utils.format.formatNearAmount(elem.total_amount);
    })

    return donations
  }

  async getDonationFromTransaction(txhash) {
    let donation_amount = await this.wallet.getTransactionResult(txhash);
    return utils.format.formatNearAmount(donation_amount);
  }

  async enter_pool(amount) {
    let deposit = utils.format.parseNearAmount(amount.toString())
    let response = await this.wallet.callMethod({ contractId: this.contractId, method: "enter_pool", deposit })
    return response
  }

  async transfer(to, tokens) {
    let amount = utils.format.parseNearAmount(tokens.toString())
    let deposit = utils.format.parseNearAmount("0.5")
    let response = await this.wallet.callMethod({ contractId: this.contractId, method: "transfer", args: { to: to, amount: amount } , deposit})
    return response
  }


}