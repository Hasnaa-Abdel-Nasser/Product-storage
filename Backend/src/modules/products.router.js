
import express from 'express'
import * as endpoints from './products.controller.js'
const productRouter = express.Router();

productRouter.post("/products", endpoints.addProduct);

productRouter.get("/products", endpoints.getAllProducts);
  
productRouter.put("/products", endpoints.updateProduct);
  
productRouter.delete('/products', endpoints.deleteProduct);

export default productRouter;