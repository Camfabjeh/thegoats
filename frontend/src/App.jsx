import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneCalculator from "./components/PhoneCalculator";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element />
        <Route path="" element />
        <Route path="/results" element={<PhoneCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
