import React from 'react'

const Setup = ({data}) => {
    return (
      <section className="joke">
         <div className="single-joke">
            <h3>{data.setup}</h3>
            <br />
            <h3>{data.delivery}</h3>
            </div>
        </section>
      
    )
}

export default Setup