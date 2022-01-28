import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import Navbar from './components/nav/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Work from './components/work/Work'
import Developers from './components/developers/Developers'
import Contact from './components/contact/Contact'

const App = () => {
    return(
        <div className='app'>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/work' element={<Work/>}/>
                    <Route path='/developers' element={<Developers/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
