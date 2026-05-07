import HomePage from './components/Hero'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import AboutPage from './components/About'
import BlogPage from './components/Blog'
import SimpleForm from './components/Form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} /> */}
          <Route path="/" element={<SimpleForm />} />

        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App