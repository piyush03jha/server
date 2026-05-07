const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Route 1 → first PDF
app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "Semiconductor.pdf");
    res.download(filePath);  // forces download
});

// Route 2 → second PDF (optional)
app.get("/file2", (req, res) => {
    const filePath = path.join(__dirname, "rm2.pdf");
    res.download(filePath);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});