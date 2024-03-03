import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [mydata, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using Promises
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => setMyData(response.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  //using Async Await
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError !== "" && <h1>{isError}</h1>}
      <div className="grid">
        {mydata.slice(0, 11).map((post) => {
          // destructuring parameter or props
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
