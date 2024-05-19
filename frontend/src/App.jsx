import { useEffect, useState } from 'react'
import { Wallet } from "./services/near-wallet";
import Form from './components/Form';
import SignIn from './components/SignIn';
import Messages from './components/Messages';
import { utils } from 'near-api-js';


import { Contract } from './services/near-interface';

import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import logo from './images/logo.png'

const CONTRACT_NAME = "pool-5.testnet"

const wallet = new Wallet({ createAccessKeyFor: CONTRACT_NAME })

const contract = new Contract({ contractId: CONTRACT_NAME, walletToUse: wallet });

function App() {
  
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const initFunction = async () => {
      const isSignedIn = await wallet.startUp();
      const messages = await getLast10Messages();

      setIsSignedIn(isSignedIn);
      setMessages(messages.reverse());
    }
    initFunction();
  }, []);
//--------------------
  const getPrediction = async (  
    policy_deductable, 
    incident_date  ,
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
    vehicle_claim ) => {
      const formData = {
        months_as_customer: 85,
        age: 27,
        policy_number: 753452,
        policy_bind_date: '1996-07-23',
        policy_state: 'IL',
        policy_csl: '500/1000',
        policy_deductable: 2000,
        policy_annual_premium: 1174.14,
        umbrella_limit: 0,
        insured_zip: 602416,
        insured_sex: 'MALE',
        insured_education_level: 'College',
        insured_occupation: 'priv-house-serv',
        insured_hobbies: 'dancing',
        insured_relationship: 'unmarried',
        'capital-gains': 50400,
        'capital-loss': -61500,
        incident_date: '2015-02-02',
        incident_type: 'Multi-vehicle Collision',
        collision_type: 'Rear Collision',
        incident_severity: 'Minor Damage',
        authorities_contacted: 'Fire',
        incident_state: 'NY',
        incident_city: 'Northbend',
        incident_location: '1951 Best Ave',
        incident_hour_of_the_day: 14,
        number_of_vehicles_involved: 4,
        property_damage: 'YES',
        bodily_injuries: 0,
        witnesses: 0,
        police_report_available: 'NO',
        total_claim_amount: 59070,
        injury_claim: 10740,
        property_claim: 5370,
        vehicle_claim: 42960,
        auto_make: 'Toyota',
        auto_model: 'Camry',
        auto_year: 2012,
        fraud_reported: 'N',
        _c39: ''  // Assuming _c39 should be an empty string
    }

    // const formData2 = {
    //   months_as_customer: 371,
    //   age: 51,
    //   policy_number: 513099,
    //   policy_bind_date: '2005-10-15',
    //   policy_state: 'IN',
    //   policy_csl: '500/1000',
    //   policy_deductable: 1000,
    //   policy_annual_premium: 1532.47,
    //   umbrella_limit: 0,
    //   insured_zip: 452587,
    //   insured_sex: 'FEMALE',
    //   insured_education_level: 'Associate',
    //   insured_occupation: 'tech-support',
    //   insured_hobbies: 'golf',
    //   insured_relationship: 'other-relative',
    //   'capital-gains': 60300,
    //   'capital-loss': -24700,
    //   incident_date: '2015-01-19',
    //   incident_type: 'Single Vehicle Collision',
    //   collision_type: 'Rear Collision',
    //   incident_severity: 'Major Damage',
    //   authorities_contacted: 'Fire',
    //   incident_state: 'NY',
    //   incident_city: 'Arlington',
    //   incident_location: '9751 Sky Ridge',
    //   incident_hour_of_the_day: 7,
    //   number_of_vehicles_involved: 1,
    //   property_damage: 'YES',
    //   bodily_injuries: 0,
    //   witnesses: 3,
    //   police_report_available: 'YES',
    //   total_claim_amount: 75400,
    //   injury_claim: 7540,
    //   property_claim: 15080,
    //   vehicle_claim: 52780,
    //   auto_make: 'Dodge',
    //   auto_model: 'RAM',
    //   auto_year: 2012,
    //   fraud_reported: 'Y',
    //   _c39: ''
    // }
    // console.log(policy_deductable == '1');
    // const formData = (policy_deductable == '1' ? formData1 : formData2); 
    const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',  // Change method to 'POST'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  // Send formData as JSON in the body
    });
//--------------------

    const predictions = await response.json();
    console.log('Predictions:', predictions);
    return predictions;
}
  const getLast10Messages = async () => {
    const total_messages = await wallet.viewMethod({ contractId: CONTRACT_NAME, method: "total_messages" });
    const from_index = total_messages >= 10 ? total_messages - 10 : 0;
    return wallet.viewMethod({ contractId: CONTRACT_NAME, method: "get_messages", args: { from_index: String(from_index), limit: "10" } });
  }

  async function enterPool() {
    if (isSignedIn) {

      try {
        await contract.enter_pool(0.5)
      } catch (e) {
        alert(
          'Something went wrong! ' +
          'Maybe you need to sign out and back in? ' +
          'Check your browser console for more info.'
        )
        throw e
      }
  }
}


  async function updateUI() {
    const messages = await getLast10Messages();
    setMessages(messages.reverse());
    console.log("UI updated");
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const policy_deductable = e.target.elements[1]
    const incident_date = e.target.elements[2]
    const policy_annual_premium = e.target.elements[3]
    const incident_type = e.target.elements[4]
    const collision_type = e.target.elements[5]
    const incident_severity = e.target.elements[6]
    const authorities_contacted = e.target.elements[7]
    const number_of_vehicles_involved = e.target.elements[8]
    const police_report_available = e.target.elements[9]
    const total_claim_amount = e.target.elements[10]
    const injury_claim = e.target.elements[11]
    const property_claim = e.target.elements[12]
    const vehicle_claim = e.target.elements[13]

    const prediction = await getPrediction(  policy_deductable.value, 
      incident_date.value,
      policy_annual_premium.value,
      incident_type.value,
      collision_type.value,
      incident_severity.value,
      authorities_contacted.value,
      number_of_vehicles_involved.value,
      police_report_available.value,
      total_claim_amount.value,
      injury_claim.value,
      property_claim.value,
      vehicle_claim.value); 

      // const deposit = utils.format.parseNearAmount('0.1');
      const account_Id = wallet.accountId;
      await wallet.callMethod({ contractId: CONTRACT_NAME, method: "claim", args: { 
        account_Id: account_Id, 
        policy_deductable: policy_deductable.value, 
        incident_date: incident_date.value      ,
        policy_annual_premium: policy_annual_premium.value,
        incident_type: incident_type.value,
        collision_type: collision_type.value,
        incident_severity: incident_severity.value,
        authorities_contacted: authorities_contacted.value,
        number_of_vehicles_involved: number_of_vehicles_involved.value,   
        police_report_available: police_report_available.value,
        total_claim_amount: total_claim_amount.value,
        injury_claim: injury_claim.value,
        property_claim: property_claim.value,
        vehicle_claim: vehicle_claim.value,
       } });


       if (prediction[(policy_deductable.value == '1000' ? 0 : 1)] == 'N') {
          //transfer function
          alert(
            'Your insurance claim was approved! ' 
          )
        } else {
          alert(
            'Your insurance claim was flagged! ' +
            'Please reach out to dispute' 
          )
        }

    fieldset.disabled = true;

    // Add message to the guest book
  

    // Get updated messages
    const messages = await getLast10Messages();
    setMessages(messages.reverse());

    message.value = '';
    fieldset.disabled = false;
    message.focus();
  };
  const signIn = async () => {
    await wallet.signIn();
    setIsSignedIn(true); };

  const signOut = async () => {
    await wallet.signOut();
    setIsSignedIn(false); };

  return (
    <main>
      <table class="button-container">
        <tr>
          <td>
            <img src={logo}></img>
          </td>
          <td>
          {isSignedIn
            ? <button onClick={signOut}>Log out</button>
            : <button onClick={signIn}>Log in</button>
          }
          </td>
        </tr>
      </table>
        <hr />
        <body>
        <div class="container">
        <div class="grey-div">
            <h2>Where innovation meets security in auto insurance</h2>
            <p>By integrating blockchain technology, we provide unparalleled security and transparency in our claims process.</p>
        </div>

        <div class="white1-div">
          <img src={icon1}></img>
        </div>
    </div>
        </body>

        <body>
          <div class="container">
            <div class="box">
            <h3> P2P </h3>
            <p> Connects people and creates a more transparent and community-driven insurance experience. </p>
            </div>
            <div class="box">
            <h3> Machine Learning </h3> 
            <p> Accurately assess risk and detect fraudulent claims in real-time. </p> 
            </div>
            <div class="box">
            <h3> Blockchain </h3> 
            <p> Ensure secure, immutable records for all transactions and claims, enhancing trust and efficiency. </p> 
            </div>
          </div>
        </body>

        <body>
        <div class="container">
        <div class="white2-div">
        <img src={icon2}></img>
        </div>

        <div class="grey-div">
            <h2>Onboarding</h2>
            <p>Joining our insurance pool is simple and secure. By connecting your wallet via the NEAR API, you can seamlessly enter our pool and start benefiting from our cutting-edge insurance solutions.</p>
        </div>
    </div>
        </body>

        <body>
        <div class="container">
        <div class="white-div">
            <h4>Claim Today!</h4>
            <p>Fill in the form below for your claim evaluation.</p>
        </div>

        <div class="white3-div">
          <img src={icon3}></img>
        </div>
    </div>
        </body>

      {isSignedIn ? (
        <>
          <Form onSubmit={onSubmit} currentAccountId={wallet.accountId} />
          <button onClick={enterPool}>Enter Pool</button> 
        </>
      ) : ( <SignIn />
     ) }
     {isSignedIn ? (
        <>
           {!!messages.length && <Messages messages={messages} />}
        </>
      ) : ( <SignIn />
     ) }
   
      <body>
        <div class="container">
        <div class="white-div">
        </div>
        </div>
      </body>

    </main>
  )
}

export default App