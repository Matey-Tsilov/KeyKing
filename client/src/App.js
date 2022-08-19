import { Footer } from "./components/Common/Footer";
import { Nav } from "./components/Common/Nav";
import { Preloader } from "./components/Common/Preloader";
import { HeroSection } from "./components/Home/HeroSection.js";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register.js";
import Login from "./components/Login/Login.js";
import NotFound from "./components/404/404.js";
import { Quests } from "./components/Quests/Quests";

function App() {

  return (
    <div>
      <Preloader />
      <Nav />


      <Routes>
        <Route path="/" element={<HeroSection />}/>
        <Route path="/quests" element={<Quests />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<HeroSection />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
