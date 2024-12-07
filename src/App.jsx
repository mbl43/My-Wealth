import {BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {  Home, Notfound,About } from "./pages/index";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;