import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Home from './pages/home'
import ErrorPage from './pages/ErrorPage'
import Over from './pages/over-ons'
import Tarieven from './pages/tarieven'
import TarievenAutomaat from './pages/tarieven-automaat'
import Footer from './components/Footer'
import Aanmelden from './pages/aanmelden'
import Contact from './pages/contact'
import Admin from './pages/admin'
import Geslaagden from './pages/geslaagden'
import Digid from './pages/digid'
import ScrollToTop from './ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geslaagden" element={<Geslaagden />} />
        <Route path="/digid" element={<Digid />} />
        <Route path="/admin" element={<Admin />} />
          <Route path='contact' element={<Contact />} />
        <Route path="over-ons" element={<Over />} />
        <Route path="tarieven" element={<Tarieven />} />
        <Route path="tarieven-automaat" element={<TarievenAutomaat />} />
        <Route path="aanmelden" element={<Aanmelden />} /> 
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
