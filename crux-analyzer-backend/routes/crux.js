const express = require("express");
const axios = require("axios");
const router = express.Router();

const API_KEY = process.env.CRUX_API_KEY;
const API_URL = "https://chromeuxreport.googleapis.com/v1/records:queryRecord";

// Helper function to fetch data for a single URL
const fetchCruxData = async (url) => {
  try {
    const response = await axios.post(`${API_URL}?key=${API_KEY}`, {
      url,
      formFactor: "PHONE",
      metrics: [
        "first_contentful_paint",
        "largest_contentful_paint",
        "cumulative_layout_shift",
        "interaction_to_next_paint",
        "experimental_time_to_first_byte",
      ],
    });

    return {
      url,
      status: "success",
      data: response.data,
    };
  } catch (error) {
    return {
      url,
      status: "error",
      error: error.response?.data?.error?.message || "Unknown error occurred",
      code: error.response?.status || 500, // optional
    };
  }
};

router.post("/", async (req, res) => {
  const { urls } = req.body;

  if (!Array.isArray(urls) || urls.length === 0) {
    return res
      .status(400)
      .json({ error: "'urls' should be a non-empty array." });
  }

  try {
    const results = await Promise.all(urls.map(fetchCruxData));

    return res.status(200).json({ results });
  } catch (err) {
    console.error("Unexpected error:", err.message);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
