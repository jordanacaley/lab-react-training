import React from 'react'


const ClickablePicture = (props) => {

  function toggle() {
    const element = document.getElementById("img");
    const element2 = document.getElementById("imgClicked");
    element.classList.toggle("hidden");
    element2.classList.toggle("hidden");
  }
  
  return (
    <div>
      <div>
        <img id="img" onClick={toggle} src={props.img} alt="" />
        <img id="imgClicked" onClick={toggle} className="hidden" src={props.imgClicked} alt="" />
      </div>
      
    </div>
  )
}

export default ClickablePicture
