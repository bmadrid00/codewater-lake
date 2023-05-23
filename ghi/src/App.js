import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Cabins from "./Cabins";
import Home from "./home";

import Nav from "./Nav";

import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route index element={<Home />} />
              <Route path="signup" element={<Signup />} />
              <Route path="signin" element={<Signin />} />
              <Route path="cabins" element={<Cabins />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
