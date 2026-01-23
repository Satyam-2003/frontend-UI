import { Routes, Route } from "react-router-dom";
import Popup from "./components/Popup";
import InterviewPage from "./components/InterviewPage";
import Verification from "./components/Verification";

const App = () => {
  return (
    <div className="h-screen overflow-hidden bg-white text-slate-900 font-(--font-inter)">
      <Routes>
        <Route path="/" element={<Popup />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </div>
  );
};

export default App;
