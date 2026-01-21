import Sidebar from "./Sidebar";
import VerificationDashboard from "./VerificationDashboard";
const Verification = () => {
  return (
    <div className="flex min-h-screen bg-[#070B14] text-white">
      <Sidebar />
      <VerificationDashboard/>
    </div>
  );
};

export default Verification;
