import axios from "axios";
import { useState } from "react";

function AutomationControl() {
  const [status, setStatus] = useState("Stopped");

  const handleStart = async () => {
    const res = await axios.get("http://localhost:5000/start");
    setStatus(res.data.status);
  };

  const handleStop = async () => {
    const res = await axios.get("http://localhost:5000/stop");
    setStatus(res.data.status);
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow">
      <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleStart}>Start</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded ml-2" onClick={handleStop}>Stop</button>
      <p>Status: {status}</p>
    </div>
  );
}

export default AutomationControl;
