import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App/App'
import reportWebVitals from './reportWebVitals'
import Navbar from './Navbar/Navbar.js'
import Footer from './Footer/footer'
import Default from './Default app/default'
import About from './About page/about.js'

import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './Home/home'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes basename="/site-templates">
                <Route path="/site-templates" element={<Default />} />
                <Route path="/site-templates/navbar" element={<Navbar />} />
                {/* <Route path="blogs" element={<Blogs />} /> */}
                <Route path="/site-templates/About" element={<About />} />
                <Route exact path="/site-templates/home" element={<Home />} />
            </Routes>
        </HashRouter>

        <Footer />
    </React.StrictMode>
)

reportWebVitals(console.log)
