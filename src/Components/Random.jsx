import React from 'react'

const Random = (props) => {

  function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <div>
      <p>Random value between {props.min} and {props.max} => {randomIntFromInterval(props.min, props.max)}</p>
    </div>
  )
}

export default Random
