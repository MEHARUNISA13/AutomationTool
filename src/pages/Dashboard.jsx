import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DataTable from "../components/DataTable";
import StatusCard from "../components/StatusCard";
import AutomationControl from "../components/AutomationControl";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-4">
        <Header />
        <StatusCard />
        <AutomationControl />
        <DataTable />
      </main>
    </div>
  );
}

export default Dashboard;
