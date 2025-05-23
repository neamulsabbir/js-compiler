const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, "dist")));

// Handle SPA fallback (for React Router, Vue Router, etc.)
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
