import Home from "./pages/home/Home";
import BookingRecord from "./pages/Booking/booking_record/booking_record";
import AddBooking from "./pages/Booking/add_booking/add_booking";
import GenReport from "./pages/Booking/generate_booking/generate_booking";
import BookingSearch from "./pages/Booking/booking_search/booking_search";
import UpdateBooking from "./pages/Booking/update_booking/update_booking";
import Registration from './components/Registration/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/booking/AddBooking">
            <Route index element={<AddBooking />} />
          </Route>
          <Route path="/booking/BookingRecord">
            <Route index element={<BookingRecord />} />
          </Route>
          <Route path="/booking/GenReport">
            <Route index element={<GenReport />} />
          </Route>
          <Route path="/booking/BookingSearch">
            <Route index element={<BookingSearch />} />
          </Route>
          <Route path="/booking/updateBookingg/:id">
            <Route index element={<UpdateBooking />} />
          </Route>
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;