import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParticleBackground from "./components/background/ParticleBackground";
import Header from "./components/header/Header";
import HomePage from "./components/home/HomePage";
import Footer from "./components/footer/Footer";
import AboutPage from "./components/about/AboutPage";
import ProjectsPage from "./components/projects/ProjectsPage";
import ErrorPage from "./components/error/ErrorPage";

function App() {
  return (
    <>
      <ParticleBackground />
      <div className="z-10 max-w-[1400px] mx-auto relative">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
