require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cruxRouter = require("./routes/crux");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/crux", cruxRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
