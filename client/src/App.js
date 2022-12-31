import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav';
import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Lateral from './Components/Lateral';
import Loader from './Components/Loader';

function App() {
  const [load, setLoad] = useState(false);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  })

  setTimeout(()=>{
    setLoad(true);
  },5500)

  return (
    <div>
      {load ? (
        <div>
          <Nav/>
          <Lateral/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/contact' element={<Contact contact={contact} setContact={setContact} />} />
          </Routes>
        </div>
        ) : (
          <div>
            <Loader/>
          </div>
      )}
    </div>
  );
}

export default App;
