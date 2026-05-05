import express from "express";
import mongoose from "mongoose";
import Product from "../model/productModel.js";
import { error } from "node:console";

const router = express.Router();

//fetch alll
router.get("/products",async (req,res)=>{
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        res.json({ error: error.message });
    }
})

//add new prod
router.post("/products", async (req,res)=>{
    try {
        const product = new Product(req.body);
        const saved = await product.save();
        res.json(saved);
  } catch (error) {
        res.json({ error: error.message });
  }
})

//find product by id
router.get("/products/:id", async (req,res)=>{
    try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.json({ error: error.message });
  }
})


//update product by id
router.put("/products/:id", async (req,res)=>{
    try {
    const { id } = req.params;

    const updated = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.json({ error: "Product not found" });
    }

    res.json(updated);
  } catch (error) {
    res.json({ error: error.message });
  }
})


//delete product by id
router.delete("/products/:id", async (req,res)=>{
    try {
    const { id } = req.params;

    const deleted = await Product.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ message: "Product deleted" });
  } catch (error) {
    res.json({ error: error.message });
  }
})

export default router;