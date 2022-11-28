import logo from "./logo.svg";
import "./App.css";
import Bubbles from "./Bubbles.js";
import * as d3 from "d3";
import BarChart from "./BarChart.js";

function App() {
  return (
    <div className="App">
      <p className="intro">
        Many people say anti-semitism isn't a problem. However, recently, the
        population of countries with 4.1 billion adults were surveyed. Each dot
        below represents 7.5 million people. Press the spacebar to see the
        proportion of that population that is anti-semitic(red) and that is
        Jewish(blue) . There are 1.09 billion people who harbor anti-semitic
        attitudes about the 15 million Jewish people.
      </p>
      <div id="p5Container">
        <Bubbles />
      </div>
      <p className="hateCrimes">
        The number of hate crimes against Jewish people has risen dramatically
        in recent years. From 2013 to 2021, they have almost quadrupled, rising
        from 751 to 2,717.
      </p>
      <BarChart />
    </div>
  );
}

export default App;
