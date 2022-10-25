import { useEffect, useState } from "react";
import Jokes from "./Jokes";
import Setup from "./setup";
import mixpanel from "mixpanel-browser";
mixpanel.init(process.env.REACT_APP_MIXPANEL)


const url = "https://v2.jokeapi.dev/joke/Programming";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchJokes = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="App">
      <main>
        <h1 className="smile">
          Your daily dev smile from jokeAPI <span>:) :)</span>
        </h1>
        {data.joke ? (
          <Jokes loading={loading} data={data} />
        ) : data.setup ? (
          <Setup loading={loading} data={data} />
        ) : (
          <p>No jokes available</p>
        )}
      </main>
      <button onClick={fetchJokes} className="btn">
        Click and smile
      </button>
      <footer>
        {" "}
        <p>
          More jokes at <a href="https://sv443.net/jokeapi/v2">jokeAPI</a>
        </p>{" "}
      </footer>
    </div>
  );
}

export default App;
