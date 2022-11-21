import React from 'react'
import QuoteButton from "./QuoteButton"

const QuoteBox = ({ quote, author, getNewValue, color }) => {
    return (
        <article className='quote' style={{color: color}}>
            <div className="quote-body">
                <i className='bx bxs-quote-left' style={{color:color}}></i>
                <p>{quote}</p>
            </div>
            
            <div className="quote-footer">
                <h4>{author}</h4>
                <QuoteButton getNewValue={getNewValue} color={color} />
            </div>
        </article>
    )
}

export default QuoteBox