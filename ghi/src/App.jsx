import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./users/Signup";
import Signin from "./users/Signin";
import Profile from "./users/ProfileView";
import Cabins from "./cabins/CabinList";
import CabinDetail from "./cabins/CabinDetail";
import Homepage from "./fixHome";
import Footer from "./Footer";
import Nav from "./Nav";
import "./css/app.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/cabins/:cabin_id" element={<CabinDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
