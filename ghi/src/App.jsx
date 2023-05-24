import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./signup";
import Signin from "./signin";
import Cabins from "./cabins";
import CabinDetail from "./cabinDetail";
import Footer from "./footer";
import Nav from "./nav";
import "./app.css";
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
