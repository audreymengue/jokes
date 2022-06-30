
import React from 'react'
import Loading from "./Loading";

const Jokes = ({ data, loading }) => {

  if(loading) {
    return (
      <section>
        <Loading/>
      </section>
    )
  }
    return (
      <article className="joke">
        <div className="single-joke">
          <h3>{data.joke}</h3>
        </div>
           
      </article >
     
    )
}

export default Jokes