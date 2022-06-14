import { useEffect, useState } from "react";
import Jokes from "./Jokes";
import Loading from "./Loading";
import Setup from "./setup";

const url = "https://v2.jokeapi.dev/joke/Any";

function App() {
const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);

    const fetchJokes = async () =>  {
      setLoading(true)
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("the datatype of jokes is = ", typeof data);
        setLoading(false);
        setData(data)
       
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
      console.log("these are the jokes right here", data);
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
      <p className="joke">sorry</p>

      { data.joke ? <Jokes data={data}/> : <Setup data={data}/>}
        <button onClick={fetchJokes} className="btn">Fetch jokes </button>
    </div>
  );
}

export default App;
