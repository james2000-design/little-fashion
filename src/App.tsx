import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stories from "./pages/storiesPage";
import Products from "./pages/productsPage";
import Faqs from "./pages/faqsPage";
import ContactPage from "./pages/contactPage";
import SignInPage from "./pages/signInPage";
import SignUpPage from "./pages/signUpPage";
import CartPage from "./pages/cartPage";
import Spinner from "./components/spinner";

function App() {
  return (
    <>
      <Router>
        <Spinner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
