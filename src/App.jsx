import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Feature from './pages/feature/Feature'
import Overview from './pages/overview/Overview'
import Pricing from './pages/pricing/Pricing'
import Navbar from './components/Navbar'
import { AnimatePresence } from 'framer-motion'
import Login from './pages/login/Login'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <AnimatePresence mode="wait">
      <Routes>
        
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='feature' element={<Feature/>}/>
        <Route path='overview' element={<Overview/>}/>
        <Route path='pricing' element={<Pricing/>}/>
        <Route path='login' element={<Login/>}/>
        
        
        
        
      
        
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}

export default App
