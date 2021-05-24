import React from 'react';
import Rating from "./Rating";

const DriverCard = (props) => {
  return (
    <div>
      <div className="driverCardContainer">
        <div>
          <img className="driverImg" src={props.img} alt="" />
        </div>
        <div className="textDiv">
          <div>{props.name}</div>
          <div className="stars"><Rating>{props.rating}</Rating></div>
          <div className="smallText">{props.car.model} - {props.car.licensePlate}</div>
        </div>
      </div>
    </div>
  )
}

export default DriverCard
