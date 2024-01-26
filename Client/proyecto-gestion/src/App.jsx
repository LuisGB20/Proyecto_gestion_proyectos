import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from '../src/pages/Home/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
