import { Routes, Route } from "react-router";
import Firstpage from "./pages/Firstpage";
import Books from "./pages/Books";
import Nothigpage from "./pages/Nothigpage";
import Home from "./pages/Home";
import Login from "./Hooks/Login";
import Singup from "./Hooks/Singup";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/Books">
          <Route index element={<Books />} />
          <Route path=":id" element={<Books />} />
        </Route>
        <Route path="*" element={<Nothigpage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Firstpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Singup" element={<Singup />} />
      </Routes>
    </>
  );
}

export default App;
