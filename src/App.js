
import './App.css';
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
    </div>
  );
}

export default App;
