import { useState } from 'react'
import './App.css'
import NavBar from './nav-bar/nav-bar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Telefonos from './pages/telefonos/telefonos'
import DecoracionCasa from './pages/casa-decoracion/casaDecoracion'
import Perfumes from './pages/perfumes/perfumes'
import Alimentos from './pages/alimentos/alimentos'
import DetalleProducto from './pages/detalleProducto/detalleProducto'
import Carrito from './pages/carrito/carrito'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/smartphones' element={<Telefonos/>} />
            <Route path='/home-decoration' element={<DecoracionCasa/>} />
            <Route path='/fragrances' element={<Perfumes/>} />
            <Route path='/groceries' element={<Alimentos/>} />
            <Route path='/producto/:id' element={<DetalleProducto/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
        </Routes>

      </Router>
    </>
  )
}

export default App
