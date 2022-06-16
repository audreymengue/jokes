
import React from 'react'

const Jokes = ({ data }) => {
    return (
      <article className="joke">
        <div className="single-joke">
          <h3>{data.joke}</h3>
        </div>
           
      </article >
     
    )
}

export default Jokes