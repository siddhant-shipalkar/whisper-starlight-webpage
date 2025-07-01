import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LocationDetails from './pages/LocationDetails';
import Footer from './components/Footer';
import Booking from './pages/Booking';
import BookingHistory from './pages/BookingHistory';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/location/:name" element={<LocationDetails />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/booking-history" element={<BookingHistory />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
