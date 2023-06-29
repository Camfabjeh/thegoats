import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CleaningNeeded from "./pages/CleaningNeeded";
import PhoneCharacteristics from "./pages/PhoneCharacteristics";
import Result from "./pages/Result";
import CommercialSentences from "./pages/CommercialSentences";
import Nowhere from "./pages/Nowhere";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/accueil" element={<HomePage />} />
        <Route path="/nettoyage" element={<CleaningNeeded />} />
        <Route path="/estimation" element={<PhoneCharacteristics />} />
        <Route path="/bilan" element={<Result />} />
        <Route path="/phraseschoc" element={<CommercialSentences />} />
        <Route path="*" element={<Nowhere />} />
      </Routes>
    </Router>
  );
}

export default App;
