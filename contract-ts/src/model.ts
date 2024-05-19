export const POINT_ONE = '100000000000000000000000';

export class Claim {
  account_Id: string;
  policy_deductable: number;               // Corresponds to field 6
  incident_date: string;               // Corresponds to field 17 but should likely be stored as a date type or timestamp
  policy_annual_premium: number;           // float64
  incident_type: string;                   // object
  collision_type: string;                  // object
  incident_severity: string;              // object
  authorities_contacted: string;           // object
  number_of_vehicles_involved: number;     // int64
  police_report_available: string;         // object
  total_claim_amount: number;              // int64
  injury_claim: number;                    // int64
  property_claim: number;                  // int64
  vehicle_claim: number;                   // int64


  constructor({
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
    vehicle_claim, }: Claim) {
    this.account_Id = account_Id;
    this.policy_deductable = policy_deductable;
    this.incident_date = incident_date;
    this.policy_annual_premium = policy_annual_premium;
    this.incident_type = incident_type;
    this.collision_type = collision_type
    this.incident_severity = incident_severity;
    this.incident_date = incident_date;
    this.authorities_contacted = authorities_contacted;
    this.number_of_vehicles_involved = number_of_vehicles_involved;
    this.police_report_available = police_report_available;
    this.incident_date = incident_date;
    this.total_claim_amount = total_claim_amount;
    this.injury_claim = injury_claim;
    this.property_claim = property_claim;
    this.vehicle_claim = vehicle_claim;
  }
}