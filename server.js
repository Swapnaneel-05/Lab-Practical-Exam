import express from "express";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.use(express.json());
connectDb();

app.use("/products", productRoutes);

app.listen(3000, () => {
  console.log("Server is running");
});