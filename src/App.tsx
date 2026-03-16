import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Location from './pages/Location'
import Reservations from './pages/Reservations'
import Gallery from './pages/Gallery'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import HomePt from './pages/pt/HomePt'
import AboutPt from './pages/pt/AboutPt'
import MenuPt from './pages/pt/MenuPt'
import LocationPt from './pages/pt/LocationPt'
import ReservationsPt from './pages/pt/ReservationsPt'
import GalleryPt from './pages/pt/GalleryPt'
import BlogPt from './pages/pt/BlogPt'
import BlogPostPt from './pages/pt/BlogPostPt'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* English */}
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/location" element={<Location />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* Portuguese */}
            <Route path="/pt" element={<HomePt />} />
            <Route path="/pt/cardapio" element={<MenuPt />} />
            <Route path="/pt/sobre" element={<AboutPt />} />
            <Route path="/pt/localizacao" element={<LocationPt />} />
            <Route path="/pt/reservas" element={<ReservationsPt />} />
            <Route path="/pt/galeria" element={<GalleryPt />} />
            <Route path="/pt/blog" element={<BlogPt />} />
            <Route path="/pt/blog/:slug" element={<BlogPostPt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
