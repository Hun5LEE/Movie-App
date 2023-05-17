import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://api.coinpaprika.com/v1/tickers"
        );
        setCoinData(data);
        setLoading(false);
      } catch (err) {
        alert("Error loading");
      }
    })();
  }, []);

  return (
    <div className="App">
      <h1>The coins!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coinData.map((a, i) => {
            return (
              <li key={i}>
                {a.name} ({a.symbol} : ${a.quotes.USD.price})
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
