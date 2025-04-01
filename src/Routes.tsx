import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { SkillSet } from "./pages/SkillSet";
import { Projects } from "./pages/Projects";
import { Testimonials } from "./pages/Testimonials";
import { Home } from "./pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <SkillSet />
                <Testimonials />
                <Projects />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
