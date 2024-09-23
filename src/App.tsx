import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stories from "./pages/storiesPage";
import Products from "./pages/productsPage";
import Faqs from "./pages/faqsPage";
import ContactPage from "./pages/contactPage";
import SignInPage from "./pages/signInPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
