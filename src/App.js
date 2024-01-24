//import logo from "./logo.svg";
import "./App.css";

function App() {
  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(
    "https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=XXX",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>Allergy Calendar</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
