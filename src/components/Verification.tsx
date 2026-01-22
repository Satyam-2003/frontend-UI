import Sidebar from "./Sidebar";
import VerificationDashboard from "./VerificationDashboard";
const Verification = () => {
  return (
   <div className="flex h-screen w-screen overflow-hidden bg-[#070B14] text-white">
      {/* Sidebar (NON-SCROLLING) */}
      <Sidebar />

      {/* Main Content (ONLY THIS SCROLLS) */}
      <div className="flex-1 overflow-y-auto">
        <VerificationDashboard />
      </div>
    </div>
    
  );
};

export default Verification;
