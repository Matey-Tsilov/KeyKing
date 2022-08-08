import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import { Preloader } from "./components/Preloader";

function App() {
  return (
    <div>
      <Preloader />

      <Nav />

      <Main />

      <Footer />

    </div>
  );
}

export default App;
