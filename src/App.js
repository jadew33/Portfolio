import "./assets/styles/App.scss";
import ProfileBanner from "./ProfileBanner";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <div className="app-left">
        <ProfileBanner />
        <About />
      </div>

      <div className="app-right">
        <Portfolio />
      </div>
      <Contact />
    </div>
  );
}

export default App;
