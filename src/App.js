import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="contrainer">
        <Weather />
        <footer>
          Coded by Aneta and open-sourced on{" "}
          <a
            href="https://github.com/Aneta21/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
