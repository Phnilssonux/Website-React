import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/home.jsx';
import Collection from './Pages/collection.jsx';

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/collection" element={<Collection/>}/>
  </Routes>
</BrowserRouter>  </>;
}

export default App;
