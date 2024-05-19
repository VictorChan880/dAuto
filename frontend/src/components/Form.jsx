// import PropTypes from 'prop-types';

// export default function Form({ onSubmit, policy_deductable,
//   incident_date,
//   policy_annual_premium, 
//   incident_type, 
//   collision_type,
//   incident_severity,
//   authorities_contacted,
//   number_of_vehicles_involved,
//   police_report_available,
//   total_claim_amount,
//   injury_claim,
//   property_claim,
//   vehicle_claim }) {
//   return (
//     <form onSubmit={onSubmit}>
//       <fieldset id="fieldset">
//       <p>Sign the guest book, { policy_deductable }!</p>
//         <p className="highlight">
//           <label htmlFor="policy_deductable">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="policy_deductable"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { incident_date }!</p>
//         <p className="highlight">
//           <label htmlFor="incident_date">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { policy_annual_premium }!</p>
//         <p className="highlight">
//           <label htmlFor="incident_date">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { incident_type }!</p>
//         <p className="highlight">
//           <label htmlFor="incident_type">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, {     collision_type }!</p>
//         <p className="highlight">
//           <label htmlFor="collision_type">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { incident_severity }!</p>
//         <p className="highlight">
//           <label htmlFor="incident_severity">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { authorities_contacted }!</p>
//         <p className="highlight">
//           <label htmlFor="authorities_contacted">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { number_of_vehicles_involved }!</p>
//         <p className="highlight">
//           <label htmlFor="number_of_vehicles_involved">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { police_report_available }!</p>
//         <p className="highlight">
//           <label htmlFor="police_report_available">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { total_claim_amount }!</p>
//         <p className="highlight">
//           <label htmlFor="total_claim_amount">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { injury_claim }!</p>
//         <p className="highlight">
//           <label htmlFor="injury_claim">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { property_claim }!</p>
//         <p className="highlight">
//           <label htmlFor="property_claim">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>Sign the guest book, { vehicle_claim }!</p>
//         <p className="highlight">
//           <label htmlFor="vehicle_claim">Message:</label>
//           <input
//             autoComplete="off"
//             autoFocus
//             id="message"
//             required
//           />
//         </p>
//         <p>
//           <label htmlFor="donation">Donation (optional):</label>
//           <input
//             autoComplete="off"
//             defaultValue={'0'}
//             id="donation"
//             min="0"
//             step="0.01"
//             type="number"
//           />
//           <span title="NEAR Tokens">Ⓝ</span>
//         </p>
//         <button type="submit">
//           Sign
//         </button>
//       </fieldset>
//     </form>
//   );
// }

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   currentAccountId: PropTypes.string.isRequired
// };

import PropTypes from 'prop-types';

export default function Form({ onSubmit, policy_deductable,
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
  vehicle_claim }) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
      <p>Policy Deductable { policy_deductable }</p>
        <p className="highlight">
          <label htmlFor="policy_deductable"></label>
          <input
            autoComplete="off"
            autoFocus
            id="policy_deductable"
            required
            placeholder="Enter full amount($)"
          />
        </p>
        <p>Incident Date { incident_date }</p>
        <p className="highlight">
          <label htmlFor="incident_date"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Enter full amount($)"
          />
        </p>
        <p>Policy Annual Premium { policy_annual_premium }</p>
        <p className="highlight">
          <label htmlFor="incident_date"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="DD/MM/YYYY"
          />
        </p>
        <p>Incident Type { incident_type }</p>
        <p className="highlight">
          <label htmlFor="incident_type"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Single Vehicle Collision, Multi-Vehicle Collition, etc."
          />
        </p>
        <p>Collision Type { collision_type }</p>
        <p className="highlight">
          <label htmlFor="collision_type"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Side, Rear, or Front"
          />
        </p>
        <p>Incident Severity { incident_severity }</p>
        <p className="highlight">
          <label htmlFor="incident_severity"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Major, Minor, Total, or Trivial"
          />
        </p>
        <p>Authorities Contacted { authorities_contacted }</p>
        <p className="highlight">
          <label htmlFor="authorities_contacted"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Ambulance, Fire, Police, etc."
          />
        </p>
        <p>Number of Vehicles Involved { number_of_vehicles_involved }</p>
        <p className="highlight">
          <label htmlFor="number_of_vehicles_involved"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Enter number"
          />
        </p>
        <p>Police Report Available { police_report_available }</p>
        <p className="highlight">
          <label htmlFor="police_report_available"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Yes, No, or N/A"
          />
        </p>
        <p>Total Claim Amount { total_claim_amount }</p>
        <p className="highlight">
          <label htmlFor="total_claim_amount"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Enter full amount ($)"
          />
        </p>
        <p>Injury Claim { injury_claim }</p>
        <p className="highlight">
          <label htmlFor="injury_claim"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Enter full amount ($)"
          />
        </p>
        <p>Property Claim { property_claim }</p>
        <p className="highlight">
          <label htmlFor="property_claim"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Enter full amount ($)"
          />
        </p>
        <p>Vehicle Claim { vehicle_claim }</p>
        <p className="highlight">
          <label htmlFor="vehicle_claim"></label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
            placeholder="Enter full amount ($)"
          />
        </p>
       
        <button type="submit">
          Sign
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentAccountId: PropTypes.string.isRequired
};