import React from 'react'

const Greetings = (props) => {

  if (props.lang === "de") {
    return (
      <div>
        <p lang={props.lang}>Hallo {props.children}</p>
      </div>
    )
  } else if (props.lang === "fr") {
    return (
      <div>
        <p lang={props.lang}>Bonjour {props.children}</p>
      </div>
    )
  } else if (props.lang === "es") {
    return (
      <div>
        <p lang={props.lang}>Hola {props.children}</p>
      </div>
    )
  } else {
    return (
      <div>
        <p lang={props.lang}>Hello {props.children}</p>
      </div>
    )
  }

}

export default Greetings
