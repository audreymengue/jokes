
import React from 'react'

const Jokes = ({ data }) => {
    return (
      <section className="joke">

         <h1>{data.joke}</h1>
         </section>
     
    )
}

export default Jokes