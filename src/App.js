import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import HeroSection from "./components/HeroSection";
// import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import PageNotFound from "./components/PageNotFound";
import styled from "styled-components";
import "./locales/index.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  padding: 0 1rem;
`;
function App() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode") ?? true)
  );
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // console.log(darkMode, darkMode ? true : false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Body>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                  <HeroSection />
                  <Wrapper>
                    <Skills />
                    <Experience />
                  </Wrapper>
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                  <Wrapper>
                    <Education />
                    <Contact />
                  </Wrapper>
                  <Footer />
                  {openModal.state && (
                    <ProjectDetails
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                    />
                  )}
                </>
              }
            />
            <Route path='*' element={<PageNotFound/>} />
            {/* <Route path='*' element={<Navigate replace to='/404'/>} /> */}

          </Routes>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
