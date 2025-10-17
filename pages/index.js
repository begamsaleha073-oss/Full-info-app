import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [number, setNumber] = useState(""); 
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!number.trim()) {
      alert("Please enter a valid phone number!");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const { data } = await axios.post("/api/search", {
        query: number,
      });
      setResponse(data);
    } catch (err) {
      console.error(err);
      setError("Error fetching data. Please check your token or try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col items-center p-6 font-mono">
      <h1 className="text-3xl font-bold mb-6 text-green-500">🐉 Happy OSINT 🪪 Investigation🔍 app 🥰 👍❤️</h1>

      <div className="w-full max-w-md flex flex-col items-center">
        <input
          type="tel"
          placeholder="Type number e.g.917482828117"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="bg-gray-900 text-green-400 border border-green-500 p-3 w-full rounded mb-3 text-center outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-6 rounded"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      <div className="mt-6 w-full max-w-3xl bg-gray-900 text-green-300 p-4 rounded overflow-x-auto text-sm">
        {error && <p className="text-red-500">{error}</p>}
        {response && (
          <pre className="whitespace-pre-wrap">{JSON.stringify(response, null, 2)}</pre>
        )}
      </div>

      <div className="mt-10 text-center max-w-2xl">
        <p className="text-red-500 text-sm border-t border-gray-700 pt-4">
          ⚠️ This tool was created by <span className="font-bold">Happy</span>.  
          It is for investigation and educational purposes only.  
          Misuse of this tool is strictly prohibited.  
          You will be responsible for any illegal use.
        </p>
      </div>
    </div>
  );
}
