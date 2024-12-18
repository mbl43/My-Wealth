import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Notfound, About } from "./pages/index";
import { Login, SignUp } from "./components/index";

function App() {
   return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
