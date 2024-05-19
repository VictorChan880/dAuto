import { NearBindgen, near, NearPromise, call, view, Vector } from 'near-sdk-js'
import { POINT_ONE, Claim } from './model'
import { AccountId } from 'near-sdk-js/lib/types'

@NearBindgen({})
class GuestBook {
  messages: Vector<Claim> = new Vector<Claim>("v-uid");
  insurance_Id: string = "pool-5.testnet";

  @call({ payableFunction: true })
  // Public - Adds a new message.
  claim({ 
    policy_deductable,
    incident_date,
    policy_annual_premium, 
    incident_type, 
    collision_type,
    incident_severity,
    authorities_contacted,
    number_of_vehicles_involved,
    police_report_available,
    total_claim_amount,
    injury_claim,
    property_claim,
    vehicle_claim,
    }: { 
    policy_deductable: number, 
    incident_date: string, policy_annual_premium: number, incident_type: string, collision_type: string,
    incident_severity: string,
    authorities_contacted: string,
    number_of_vehicles_involved: number,
    police_report_available: string,
    total_claim_amount: number,
    injury_claim: number,
    property_claim: number,
    vehicle_claim: number, }) {

    const premium = near.attachedDeposit() >= BigInt(POINT_ONE);
    const sender = near.predecessorAccountId();
    let account_Id = near.predecessorAccountId();

    const message: Claim = {
    account_Id,
    policy_deductable, 
    incident_date, 
    policy_annual_premium, 
    incident_type, 
    collision_type, 
    incident_severity, 
    authorities_contacted,
    number_of_vehicles_involved,
    police_report_available,
    total_claim_amount,
    injury_claim, 
    property_claim, 
    vehicle_claim
    } ;
    this.messages.push(message);
  }

  @call({ payableFunction: true })
  enter_pool() {
    // Get who is calling the method and how much $NEAR they attached
    let payment : bigint = near.attachedDeposit() as bigint;

    let toTransfer = payment;

    const promise = near.promiseBatchCreate(this.insurance_Id)
    near.promiseBatchActionTransfer(promise, toTransfer)

    // Return the total amount donated so far
  }

  @call({ payableFunction: true })
  transfer({ to, amount }: { to: AccountId, amount: bigint }) {
    NearPromise.new(to).transfer(amount);
  }

  @view({})
  // Returns an array of messages.
  get_messages({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): Claim[] {
    return this.messages.toArray().slice(from_index, from_index + limit);
  }

  @view({})
  total_messages(): number { return this.messages.length }
}
