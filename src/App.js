
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Aboutme from './pages/Aboutme';
import ContatMe from './pages/ContatMe';
import MainMenu from './pages/MainMenu';
import Nopage from './pages/nopage';
import Register from './pages/Signup';
import Login from './pages/Loninpage';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route index element ={<Home/>}/>
      <Route path='/home' element ={<Home/>}/>
      <Route path='/about' element ={<Aboutme/>}/>
      <Route path='/Menu' element ={<MainMenu/>}/>
      <Route path='/contact' element ={<ContatMe/>}/>
      <Route path='/register' element ={<Register/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='*' element ={<Nopage/>}/>

    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
