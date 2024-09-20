import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/slide-show/home";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Home />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
