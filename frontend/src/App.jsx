import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/layout/UserLayout";
import AdminLayout from "./pages/layout/AdminLayout";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />} />
          <Route path="" element={} />
        <Route path="/admin" element={<AdminLayout />} />
          <Route path="" element={} />
      </Routes>
    </Router>
  );
}

export default App;
