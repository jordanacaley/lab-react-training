import React from 'react'

const IdCard = (props) => {
  return (
    <div>
      <img src={props.picture} alt=""/>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height / 100 }m</p>
      <p>Birth: {props.birth.toDateString()}</p>
    </div>
  )
}

export default IdCard
