import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/home.jsx';
import Collection from './Pages/collection.jsx';
import About from './Pages/about.jsx';
import Navbar from './navbar.jsx';

function App() {
  return (
    <>
       <BrowserRouter>
       <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/collection" element={<Collection/>}/>
            <Route path="/about" element={<About/>}/>
         </Routes>
       </BrowserRouter>  
    </>
  );
}

export default App;
