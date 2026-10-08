import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import SiteHeader from './components/layout/SiteHeader';
import MobileMenu from './components/layout/MobileMenu';
import SiteFooter from './components/layout/SiteFooter';

import Home from './pages/Home';
import About from './pages/About';
import B2B from './pages/B2B';
import Contact from './pages/Contact';
import Ecommerce from './pages/Ecommerce';
import Influencers from './pages/Influencers';
import MicroLobby from './pages/MicroLobby';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Reports from './pages/Reports';
import OurWork from './pages/OurWork';
import Places from './pages/Places';
import PR from './pages/PR';
import Retriva from './pages/Retriva';
import SocialMedia from './pages/SocialMedia';
import Strategy from './pages/Strategy';
import NotFound from './pages/NotFound';

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      <MobileMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/b2b" element={<B2B />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/influencers/:city" element={<Influencers />} />
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/micro-lobby" element={<MicroLobby />} />
        <Route path="/our-blog" element={<Blog />} />
        <Route path="/our-careers" element={<Careers />} />
        <Route path="/our-reports" element={<Reports />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/places" element={<Places />} />
        <Route path="/pr" element={<PR />} />
        <Route path="/retriva" element={<Retriva />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <SiteFooter />
    </>
  );
}