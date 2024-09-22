import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stories from "./pages/stories";
import Products from "./pages/products";
import Faqs from "./pages/faqs";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
