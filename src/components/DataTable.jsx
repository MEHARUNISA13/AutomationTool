import { useState, useEffect } from "react";
import axios from "axios";

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/get-data") // Backend API
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Phone</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="border p-2">{row.name}</td>
            <td className="border p-2">{row.email}</td>
            <td className="border p-2">{row.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
