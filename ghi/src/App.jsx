import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./users/Signout";
import Signin from "./users/Signin";
import Cabins from "./cabins/CabinList";
import CabinDetail from "./cabins/CabinDetail";
import Footer from "./Footer";
import Nav from "./Nav";
import "./css/app.css";
import HomePage from "./Home";

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
