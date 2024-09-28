import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("./pages/homePage"));
const Products = React.lazy(() => import("./pages/productsPage"));
const SignInPage = React.lazy(() => import("./pages/signInPage"));

import Stories from "./pages/storiesPage";

import Faqs from "./pages/faqsPage";
import ContactPage from "./pages/contactPage";

const SignUpPage = React.lazy(() => import("./pages/signUpPage"));
import CartPage from "./pages/cartPage";
import Spinner from "./components/spinner";
import ProtectedRoute from "./components/protectedRoute";
import { AuthProvider } from "./context/storeContext";
import React, { Suspense } from "react";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Spinner />
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/register" element={<SignUpPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/stories" element={<Stories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>
          </Routes> */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<SignUpPage />} />
              <Route path="/SignInPage" element={<SignInPage />} />
            </Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/stories" element={<Stories />} />
              <Route path="/products" element={<Products />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Route>
          </Suspense>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
