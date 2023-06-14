import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./users/Signup";
import Signin from "./users/Signin";
import Profile from "./users/ProfileView";
import Cabins from "./cabins/CabinList";
import CabinDetail from "./cabins/CabinDetail";
import HomePage from "./Home";
import Footer from "./Footer";
import Nav from "./Nav";
import ReviewForm from "./ReviewForm";
import "./css/app.css";
import ReservationPage from "./reservations/ReservationPage";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '')
  return (
    <BrowserRouter basename={basename}>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/cabins/:cabin_id" element={<CabinDetail />} />
          <Route path="/reservations" element={<ReservationPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reviews/create" element={<ReviewForm />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
