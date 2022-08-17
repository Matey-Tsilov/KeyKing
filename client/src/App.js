import { Footer } from "./components/common/Footer";
import { Nav } from "./components/common/Nav";
import { Preloader } from "./components/common/Preloader";
import { ContactSection } from "./components/contact/ContactSection.js";
import { HeroSection } from "./components/home/HeroSection.js";
import { Routes, Route } from "react-router-dom";
import Register from "./components/register/Register.js";
import Login from "./components/login/Login.js";
import NotFound from "./components/404/404.js";

function App() {
  return (
    <div>
      <Preloader />
      <Nav />


      <Routes>
        <Route path="/"
          element={
            <>
              <HeroSection />
              <ContactSection />
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
