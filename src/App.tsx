import "./App.css";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Features from "./components/features";
import Advantages from "./components/advantages";
import OurMission from "./components/our-mission";
import { ScrollToTop } from "./components/scroll-to-top";
import RequestDemo from "./pages/RequestDemo";
import Services from "./pages/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Features />
                <Advantages />
                <OurMission />
                <ScrollToTop />
                <Footer />
              </>
            }
          />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:sub" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
