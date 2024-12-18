import { About } from "./About";
import { Home } from "./Home"
import { Navbar } from "./Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Skills } from "./Skills";

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<h1>Project Page</h1>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/downloadCV" element={<h1>Download CV Page</h1>} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </>
  )
}

export default App
