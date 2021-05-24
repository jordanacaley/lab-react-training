import React from 'react'

const CreditCard = (props) => {

  const ccNumber = props.number;
  const lastFour = ccNumber.substr(ccNumber.length - 4);

  let logo = ""
  
  if (props.type === "Visa") {
    logo = "http://assets.stickpng.com/images/58482363cef1014c0b5e49c1.png";
  } else if (props.type === "Master Card") {
    logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
  }

  return (
    <div>
      <div className="creditCardContainer" 
      style={{
          backgroundColor: `${props.bgColor}`,
          color: `${props.color}`
          }}>
        <img className="ccLogo" src={logo} alt=""/>
        <div className="ccNumber">•••• •••• •••• {lastFour}</div>
        <div className="ccDetails">
          <div className="flex">
            <div>Expires {props.expirationMonth}/{props.expirationYear - 2000}</div>
            <div className="ccBank">{props.bank}</div>
          </div>
          <div>{props.owner}</div>
        </div>
      </div>      
    </div>
  )
}

export default CreditCard

