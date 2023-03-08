import express from "express";
import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeograpy,
} from "../controllers/client.js";

const router = express.Router();

router.get("/products", getProducts);

router.get("/customers", getCustomers);

router.get("/transactions", getTransactions);

router.get("/geography", getGeograpy);
export default router;
