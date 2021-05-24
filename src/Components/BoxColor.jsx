import React from 'react'

const BoxColor = (props) => {

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div>
      <div 
        style={{
          backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
          height: 100,
          width: 500,
          border: "2px solid black",
          marginBottom: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
          }}      
      >
        <div>rgb({props.r}, {props.g}, {props.b})</div>
        <div>{rgbToHex(props.r, props.g, props.b)}</div>
      </div>


    </div>
  )
}

export default BoxColor
