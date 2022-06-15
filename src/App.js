import { useEffect, useState } from "react";
import Jokes from "./Jokes";
import Loading from "./Loading";
import Setup from "./setup";

const url = "https://v2.jokeapi.dev/joke/Programming";

function App() {
const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);

    const fetchJokes = async () =>  {
      setLoading(true)
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        setData(data)
       
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }

  useEffect(() => {
    fetchJokes();
  }, []);


  if(loading) {
    return (
      <section>
        <Loading/>
      </section>
    )
  }

  return (
    <div className="App">
    <main>
      <h1 className="smile">Your daily dev smile form jokeAPI :) :)</h1>
    { data.joke ? <Jokes data={data}/> 
      : data.setup ? <Setup data={data}/>
      : <p>No jokes available</p>}
      <button onClick={fetchJokes} className="btn">Click and smile</button>

      <p>More jokes at <a href="https://sv443.net/jokeapi/v2">jokeAPI</a></p>
    </main>
      
      
    </div>
  );
}

export default App;
