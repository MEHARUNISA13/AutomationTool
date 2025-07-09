import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-4">
        <Header />
        <h2 className="text-xl font-bold">Settings Page</h2>
        <p>Yahan settings controls aayenge...</p>
      </main>
    </div>
  );
}

export default Settings;
