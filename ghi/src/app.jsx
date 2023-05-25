import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./users/signUp";
import Signin from "./users/signIn";
import Cabins from "./cabins/cabins";
import Reservations from "./reservations/calendar";

import Nav from "./nav";
import "./css/app.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
