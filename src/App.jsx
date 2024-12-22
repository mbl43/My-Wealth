import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Notfound} from "./pages/index";
import { Login, SignUp } from "./components/index";
import Protected from "./components/Protected";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
   return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<SignUp />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/" element={<Protected />} />
              <Route path="/" index element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
