import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Cabins from "./Cabins";
import CabinDetail from "./CabinDetail";

import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cabins" element={<Cabins />} />
          <Route path="/cabins/:cabin_id" element={<CabinDetail />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
