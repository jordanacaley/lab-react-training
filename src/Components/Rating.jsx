import React from 'react'

const Rating = (props) => {

  let stars = ""

  const strToFloat = parseFloat(props.children)
  const roundedRating = Math.round(strToFloat)

  console.log(roundedRating)

  if (roundedRating === 0) {
    stars = "☆☆☆☆☆"
  } else if (roundedRating === 1) {
    stars = "★☆☆☆☆"
  } else if (roundedRating === 2) {
    stars = "★★☆☆☆"
  } else if (roundedRating === 3) {
    stars = "★★★☆☆"
  } else if (roundedRating === 4) {
    stars = "★★★★☆"
  } else {
    stars = "★★★★★"
  }

  return (
    <div>
      <div className="stars">{stars}</div>
    </div>
  )
}

export default Rating
