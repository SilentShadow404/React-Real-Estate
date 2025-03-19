import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Residences from "./components/Residences/Residences";
import Value from "./components/Value/Value";

import "./App.css";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies></Companies>
      <section id="residences">
        <Residences />
      </section>

      <section id="value">
        <Value />
      </section>
    </div>
  );
}

export default App;
