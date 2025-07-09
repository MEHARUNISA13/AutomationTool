import { useState, useEffect } from "react";
import axios from "axios";

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/logs")
      .then((res) => setLogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold">Automation Logs</h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index} className="text-gray-700">{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default Logs;
