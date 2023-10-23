import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Read from "./pages/Read";
import About from "./pages/About";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import NotFound from "./pages/404";
import Price from "./pages/Price";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/read" element={<Read />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <MyFooter />
    </>
  );
}

export default App;
export function Profile() {
  return (
    <img
      style={{ width: 200 }}
      src="https://eduport.webestica.com/assets/images/courses/4by3/11.jpg"
      alt=""
    />
  );
}
