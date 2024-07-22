import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/slide-show/home";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
