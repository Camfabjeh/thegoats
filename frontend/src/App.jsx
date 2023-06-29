import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CleaningNeeded from "./pages/CleaningNeeded";
import PhoneCharacteristics from "./pages/PhoneCharacteristics";
import Result from "./pages/Result";
import CommercialSentences from "./pages/CommercialSentences";
import Nowhere from "./pages/Nowhere";
import PhoneCalculator from "./components/PhoneCalculator";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nettoyage" element={<CleaningNeeded />} />
        <Route
          path="/nettoyage/estimation"
          element={<PhoneCharacteristics />}
        />
        <Route path="/nettoyage/estimation/bilan" element={<Result />} />
        <Route
          path="/nettoyage/estimation/bilan/phraseschoc"
          element={<CommercialSentences />}
        />
        <Route path="/results" element={<PhoneCalculator />} />
        <Route path="*" element={<Nowhere />} />
      </Routes>
    </Router>
  );
}

export default App;
