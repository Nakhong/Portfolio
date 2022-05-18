import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import Nav from "./PortfolioContainer/nav/Nav";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Footer from "./PortfolioContainer/Footer/Footer";
import Skills from "./PortfolioContainer/Skills/skills";
import Portfolio from "./PortfolioContainer/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <Nav />
      <Profile />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
