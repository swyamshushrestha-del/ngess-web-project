import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { CMSProvider } from "./lib/cmsContext";
import { ThemeProvider } from "./lib/themeContext";
import { LanguageProvider } from "./lib/languageContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { BackToTop } from "./components/ui/BackToTop";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { GradientBackground } from "./components/ui/GradientBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Academic from "./pages/Academic";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <CMSProvider>
      <ThemeProvider>
        <LanguageProvider>
        <Router>
          <ScrollToTop />
          <GradientBackground />
          <div className="min-h-screen font-sans text-white selection:bg-[var(--gold-accent)]/30 selection:text-white">
            <Navbar />
            <main>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/"          element={<Home />} />
                  <Route path="/about"     element={<About />} />
                  <Route path="/academic"  element={<Academic />} />
                  <Route path="/gallery"   element={<Gallery />} />
                  <Route path="/contact"   element={<Contact />} />
                  <Route path="/admission" element={<Admission />} />
                  <Route path="*"          element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </main>
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </LanguageProvider>
      </ThemeProvider>
    </CMSProvider>
  );
}
