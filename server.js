const app = require("./app"); // Import your Express app
const PORT = 3000; // Or your preferred port

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});