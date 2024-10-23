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
import ProtectedRoute from "./components/protectedRoute";
import { AuthProvider } from "./context/storeContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Router>
          <Spinner />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/products" element={<Products />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/cart" element={<CartPage />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
