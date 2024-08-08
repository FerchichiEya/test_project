import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Products from './pages/Products';
import Blogs from './pages/Blogs';
import Navbar from './components/Navbar';
// function javascript f wstha code html  ttlam f div wahda 

function App() {
  return (
   <>
   
    <Navbar/>
   <Routes>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/product" element={<Products/>}/>  
    <Route path="/blog" element={<Blogs/>}/> 

   </Routes>
   </>
  );
}

export default App;
