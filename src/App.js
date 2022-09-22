
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/sae/saemain/Navbar';
import Home from './components/sae/saemain/Home';
import About from './components/sae/saemain/About';
import Faculty from './components/sae/saemain/Faculty';
import Achievements from './components/sae/saemain/Achievements';
import Cryptech from './components/sae/saemain/Cryptech';
import Footer from "./components/sae/saemain/Footer"
import Member from "./components/sae/saemain/Member";
import Events from "./components/sae/saemain/Events"
import Error from './components/sae/saemain/Error';
import Autopia from './components/sae/saemain/Autopia';
import Bajasae from "./components/sae/saemain/Bajasae";
import { Routes, Route } from 'react-router-dom';
//baja
import Navbarb from './components/baja/bajasae/Navbarb';
import Homeb from "./components/baja/bajasae/Home"
import Aboutb from './components/baja/bajasae/About';
import Team from "./components/baja/bajasae/Team"
import Work from './components/baja/bajasae/Work';
import Sponsors from './components/baja/bajasae/Sponsors';
import Footerb from "./components/baja/bajasae/Footerb"
function App() {
  return (
    <>
      <div >

        <div className="App">

          <Routes>

            <Route exact path="/" element={<><Navbar />
              <Home />
              <About />
              <Faculty />
              <Achievements />

              <Cryptech />
              <Bajasae />
              <Footer /></>}>


            </Route>
            {/* <Route exact path="/" element={<><Error/></>}></Route> */}




            <Route exact path="/members" element={<> <Navbar />
              <Member />
              <Footer /></>}>
            </Route>
            <Route exact path="/events" element={<> <Navbar />
              <Events />
              <Footer /></>}>

            </Route>
            <Route exact path='/autopia' element={<> <Navbar />
              <Autopia />
              <Footer /></>}>

            </Route>
            
            <Route exact path="/baja" element={<><Navbarb /><Homeb /><Aboutb /><Team /><Work /><Sponsors /><Footerb /></>} />
            <Route exact path="/baja/team" element={<><Navbarb /><Team /><Footerb /></>} />
            <Route exact path="/baja/work" element={<><Navbarb /><Work /><Footerb /></>} />
            <Route exact path="/baja/sponsor" element={<><Navbarb /><Sponsors /><Footerb /></>} />
            <Route exact path='/*' element={<><Navbar /><Error /><Footer /></>} />

          </Routes>

        </div>



      </div>
    </>
  );
}

export default App;
