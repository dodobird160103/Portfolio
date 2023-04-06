import './App.css';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Experience } from './Components/Experience/Experience';
import { Header } from './Components/Header/Header';
import { Navbar } from './Components/Navbar/Navbar';
import { Portfolio } from './Components/Portfolio/Portfolio';
import { Services } from './Components/Services/Services';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
