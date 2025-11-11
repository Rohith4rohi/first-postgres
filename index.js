import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import itemsRouter from "./routes/items.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API is running 🚀"));
app.use("/api/items", itemsRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
