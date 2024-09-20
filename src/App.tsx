import HomePage from "./pages/homePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stories from "./pages/stories";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
