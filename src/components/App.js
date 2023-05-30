import Home from "./Home";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import "../styles/App.scss"

function App() {
  return (
    <div className="app">
      <Home />
      <Work />
      <About />
      <Contact />
      <div className="noise"></div>
    </div>
  );
}

export default App;
