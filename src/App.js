import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Data from "./Pages/data";
import Show from "./Pages/prop";
import Charts from "./Pages/chart";

const App  = () => {
  return (
    <div className="main-container">
    <div className="dark:bg-black">
    <Path/>
    <Footer/>
    </div>
    </div>

  );
}

function Path() {


  return (
    <BrowserRouter>
    <NavBar />
  <Routes>
    <Route>
      <Route path="/" element={<Home />} />   
      <Route path="/about" element={<About />} />  
      <Route path="/contact" element={<Contact />} />  
      <Route path="/data" element={<Data />} />  
      <Route path="/show" element={<Show />} />  
      <Route path="/charts" element={<Charts />} />  
    </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App;
