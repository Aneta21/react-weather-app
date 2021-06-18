import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="contrainer">
        <Weather defaultCity="Prague" />
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/aneta-stepankova"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Aneta{" "}
          </a>{" "}
          and open-sourced on{" "}
          <a
            href="https://github.com/Aneta21/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            <span class="fab fa-github"></span>
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
