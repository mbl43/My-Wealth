import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Notfound} from "./pages/index";
import { Login, SignUp } from "./components/index";
import Protected from "./components/Protected";

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
    </>
  );
}

export default App;
