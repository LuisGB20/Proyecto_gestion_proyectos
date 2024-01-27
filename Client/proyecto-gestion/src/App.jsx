import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home/Home'

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
