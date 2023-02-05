
import express, { json } from "express";
import cors from 'cors';
import productRouter from "./src/modules/products.router.js";
const app = express();
app.use(cors());
app.use(json());
app.use(productRouter);

app.listen(3000, () => {
  console.log("Server Working.............");
});
