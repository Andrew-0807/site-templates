import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import reportWebVitals from './reportWebVitals'
import Navbar from './Navbar/Navbar.js'
import Footer from './Footer/footer'
import Default from './Default app/default'
import About from './About page/about.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Default />} />
                <Route path="/navbar" element={<Navbar />} />
                {/* <Route path="blogs" element={<Blogs />} /> */}
                <Route path="/About" element={<About />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
        <Footer />

        <App />
    </React.StrictMode>
)

reportWebVitals(console.log)
