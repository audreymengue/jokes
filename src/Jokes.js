
import React from 'react'

const Jokes = ({ data }) => {
    return (
      <article className="joke">
        <div className='single-joke'>
            <h1>{data.joke}</h1>  
        </div>
         
         </article >
     
    )
}

export default Jokes