//import logo from "./logo.svg";
import "./App.css";

function App() {
  const options = { method: "GET", headers: { accept: "application/json" } };
  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.tomorrow.io/v4/weather/forecast?location=52.1347,21.0042&apikey=YL6HlKP4wNYwKFmJItCk6AsYWH353kaO",
        options
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();

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
