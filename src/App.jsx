import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Events from './Pages/Events'
import About from './Pages/About'
import Header from './Components/Header'
import EventDetails from './Pages/EventsDetail'
import Footer from './Components/Footer'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/about' element={<About />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
      <Footer />
    </Router>
  );

}

export default App
