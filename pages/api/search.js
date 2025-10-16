import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: "Missing query" });
  }

  try {
    const { data } = await axios.post("https://leakosintapi.com/", {
      token: process.env.LEAKOSINT_API_TOKEN,
      request: query,
      limit: 300,
      lang: "ru",
    });
    res.status(200).json(data);
  } catch (err) {
    console.error("LeakOSINT fetch error:", err?.response?.data || err.message || err);
    res.status(500).json({ error: "Failed to fetch data from LeakOSINT" });
  }
}
