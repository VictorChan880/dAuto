import PropTypes from 'prop-types';

export default function Messages({ messages }) {
  return (
    <>
      <h2>Claims</h2>
      {messages.map((message, i) =>
        // TODO: format as cards, add timestamp
        <p key={i} className={message.premium ? 'is-premium' : ''}>
          <strong>Issuer: {message.account_Id}</strong><br/>
          <strong>Policy Deductable: {message.policy_deductable}</strong><br/>
          <strong>incident_date: {message.incident_date}</strong><br/>
          <strong>policy_annual_premium: {message.policy_annual_premium}</strong><br/>
          <strong>incident_type: {message.incident_type}</strong><br/>
          <strong>collision_type: {message.collision_type}</strong><br/>
          <strong>incident_severity: {message.incident_severity}</strong><br/>
          <strong>authorities_contacted: {message.authorities_contacted}</strong><br/>
          <strong>number_of_vehicles_involved: {message.number_of_vehicles_involved}</strong><br/>
          <strong>police_report_available: {message.police_report_available}</strong><br/>
          <strong>total_claim_amount: {message.total_claim_amount}</strong><br/>
          <strong>vehicle_claim: {message.vehicle_claim}</strong><br/>
          <strong>injury_claim: {message.injury_claim}</strong><br/>
          <strong>property_claim: {message.property_claim}</strong><br/>
          <strong>vehicle_claim: {message.vehicle_claim}</strong><br/>

        </p>
      )}
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};