require("dotenv").config();
const express = require("express");
const cors = require("cors");
const uiRoutes = require("./src/routes/uiRoutes");
const connectDB = require("./src/config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Load Routes
app.use("/api/ui", uiRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

(async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to the database', error);
    }
})();
