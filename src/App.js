import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./App.css";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import SwingingItem from "./components/SwingingItem";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <SwingingItem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Project />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
