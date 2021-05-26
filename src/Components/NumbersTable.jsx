import React from 'react'

const NumbersTable = (props) => {

  let divsArray = [];

  function printDivs(limit) {
    for (let i = 1; i <= limit; i++) {
      let myDiv = i;
      console.log(myDiv);
      divsArray.push(myDiv);
    }
    console.log(divsArray);
    return divsArray
  }

  function handleColor(number) {
    if (number % 2 === 0) {
      return "red";
    } else {
      return "white";
    }
  }


  
  return (
    <div>

      <div className="numbersContainer">
          {printDivs(props.limit).map((number, index) => {
            return (
              <div className={handleColor(number)}> 
                <div>
                  {number}
                </div>

              </div>

            );
          })}

        </div>
      
    </div>
  )
}

export default NumbersTable
