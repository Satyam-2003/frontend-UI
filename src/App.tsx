import { Routes, Route } from "react-router-dom";
import Popup from "./components/Popup";
import InterviewPage from "./components/InterviewPage";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-(--font-inter)">
      <Routes>
        <Route path="/" element={<Popup />} />
        <Route path="/interview" element={<InterviewPage />} />
      </Routes>
    </div>
  );
};

export default App;
