import React from 'react'

const QuoteButton = ({getNewValue, color}) => {
  return (
    <button onClick={getNewValue} className='button' style={{background:color}}>
        <i className='bx bx-right-arrow-alt'></i>
    </button>
  )
}

export default QuoteButton