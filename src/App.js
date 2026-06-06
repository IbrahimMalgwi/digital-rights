import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const About = lazy(() => import('./pages/About'));
const Awards = lazy(() => import('./pages/Awards'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Donate = lazy(() => import('./pages/Donate'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Home = lazy(() => import('./pages/Home'));
const Partners = lazy(() => import('./pages/Partners'));
const Projects = lazy(() => import('./pages/Projects'));
const Team = lazy(() => import('./pages/Team'));

const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center" role="status">
        <span className="sr-only">Loading page</span>
        <div className="w-10 h-10 rounded-full border-4 border-primary-100 border-t-primary-600 animate-spin" />
    </div>
);

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, [pathname]);

    return null;
};

function App() {
    return (
        <Router>
            <div className="App min-h-screen flex flex-col">
                <ScrollToTop />
                <Header />
                <main className="flex-grow">
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/awards" element={<Awards />} />
                            <Route path="/donate" element={<Donate />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/partners" element={<Partners />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/projects/:projectId" element={<Navigate to="/projects" replace />} />
                            <Route path="/blog/:postId" element={<Navigate to="/blog" replace />} />
                            <Route path="/wdfa" element={<Navigate to="/projects" replace />} />
                            <Route path="/data-workers-inquiry" element={<Navigate to="/projects" replace />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
