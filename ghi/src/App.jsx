import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./users/signup";
import Signin from "./users/signin";
import Cabins from "./cabins/cabins";
import CabinDetail from "./cabins/cabinDetail";
import Footer from "./footer";
import Nav from "./nav";
import "./css/app.css";
import HomePage from "./homepage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cabins" element={<Cabins />} />
        <Route path="/cabins/:cabin_id" element={<CabinDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
