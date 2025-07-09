import { useState } from "react";

function StatusCard() {
  const [status, setStatus] = useState("Idle");

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-bold">Automation Status</h2>
      <p className={`text-${status === "Running" ? "green" : "red"}-500`}>
        {status}
      </p>
    </div>
  );
}

export default StatusCard;
