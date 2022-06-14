import React from 'react'

const Setup = ({data}) => {
    return (
      <section className="joke">
       
        <h3>{data.setup}</h3>
        <h3>{data.delivery}</h3>
        </section>
      
    )
}

export default Setup