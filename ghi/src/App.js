import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import Cabins from "./Cabins";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/api/signup" element={<Signup />} />
          <Route path="/api/signin" element={<Signin />} />
          <Route path="/api/cabins" element={<Cabins />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
