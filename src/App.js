import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'; // Add this import
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';
import Team from './pages/Team';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import './index.css';

function App() {
    return (
        <Router>
            <div className="App min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} /> {/* Add this route */}
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/donate" element={<Donate />} />
                        <Route path="/team" element={<Team />} />
                        <Route path="/partners" element={<Partners />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;