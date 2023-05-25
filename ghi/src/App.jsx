import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./users/SignUp";
import Signin from "./users/SignIn";
import Profile from "./users/Profile";
import Cabins from "./Cabins";
import Home from "./crazyhome";
import Nav from "./Nav";

import "./css/app.css";

function App() {
  return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/cabins" element={<Cabins />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
