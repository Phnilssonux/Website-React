import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/home.jsx';
import Collection from './Pages/collection.jsx';
import About from './Pages/about.jsx';
import Navbar from './navbar.jsx';
import Footer from './components/footer.jsx';
import ColorPicker from './Pages/colorpicker.jsx';
import ToDoList from './Pages/list.jsx';

function App() {
  return (
    <>
       <BrowserRouter>
       <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/collection" element={<Collection/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/color-picker" element={<ColorPicker/>}/>
            <Route path="/ToDoList" element={<ToDoList/>}/>
         </Routes>
         <Footer></Footer>
       </BrowserRouter>  
    </>
  );
}

export default App;
