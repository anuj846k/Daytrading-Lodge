import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <div className="font-switzer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
