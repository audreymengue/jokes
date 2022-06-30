import React from 'react'
import Loading from "./Loading";

const Setup = ({data, loading}) => {

    if(loading) {
        return (
          <section>
            <Loading/>
          </section>
        )
      }
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