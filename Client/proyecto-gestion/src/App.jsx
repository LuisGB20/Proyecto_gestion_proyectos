import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx'
import ResourcesAndAssets from "./pages/Resources and Assets/Resources and assets.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/ResourcesAndAssets' element={<ResourcesAndAssets/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
