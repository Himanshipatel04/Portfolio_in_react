import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "../src/common/Header";
import Home from "../src/pages/Home";
import Project from "../src/pages/Project";
import Skills from "../src/pages/Skills";
import Achievements from "../src/pages/Achievements";
import Contact from "../src/pages/Contact";
import About from '../src/pages/About';import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    // <div>
    //   <Home/>
    // </div>
    <Router>
      <Header/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/achievements' element={<Achievements/>} />
        <Route path='/contact' element={<Contact/>} />
       </Routes>
    </Router>
  );
}

export default App;
