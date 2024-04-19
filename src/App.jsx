import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import LandingPage from './app/pages/LandingPage'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ProductsMenu from './app/components/ProductsMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products/:firmID/:firmName' element={<ProductsMenu />} />
      </Routes>
    </>
  )
}

export default App
