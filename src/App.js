
import './App.css';
import Contact from './contact/Contact';
import Header from './header/Header';
import Main from './main/Main';
import Offer from './offer/Offer';
import Skills from './skills/Skills';
import Works from './works/Works';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
      <Offer/>
      <Contact/>
    </div>
  );
}

export default App;
