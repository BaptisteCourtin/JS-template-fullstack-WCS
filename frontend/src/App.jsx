import { Route, Routes } from "react-router-dom";

import Home from "@pages/Home";
import Portfolio from "@pages/Portfolio";
import Contact from "@pages/Contact";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Admin from "@pages/Admin";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
