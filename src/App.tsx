import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParticleBackground from "./components/background/ParticleBackground";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ErrorPage from "./components/error/ErrorPage";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ProjectsPage from "./pages/projects/ProjectsPage";

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
