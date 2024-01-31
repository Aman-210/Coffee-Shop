
import {BrowserRouter , Routes, Route} from 'react-router-dom';

import Home from './Components/Home/Home';
import LoginDialog from './Components/Pages/Login';
import SignUp from './Components/Pages/Signup';
import Cart from './Components/Pages/Cart';
import Header from './Components/Header/Header';

import './index.css';
import Detail from './Components/Products Detail/Detail';


function App() {
  return (
    <>
    <BrowserRouter basename='Coffee-Shop'>
      <Header/>
    <Routes>
      
      <Route path='/' element={<Home/>}  />
      <Route path='/login' element={<LoginDialog/>}/>
      <Route path= "/signup" element = {<SignUp/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/detail' element={<Detail/>}/>

    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
