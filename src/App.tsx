import { Routes, Route } from "react-router-dom";
import Popup from "./components/Popup";
import InterviewPage from "./components/InterviewPage";
import Verification from "./components/Verification";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-(--font-inter)">
      <Routes>
        <Route path="/" element={<Popup />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </div>
  );
};

export default App;
