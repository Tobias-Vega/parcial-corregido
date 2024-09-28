import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt.js";
import {
  createOrderCtrl,
  deleteOrderByIdCtrl,
  getOrderByIdCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import { 
  createOrderValidations,
} from "../validations/orders.validations.js";
import { applyValidations } from "../validations/apply.validations.js";

const ordersRouter = Router();

ordersRouter.get("/", validateJwt, getOrdersCtrl);

ordersRouter.post("/", validateJwt, createOrderValidations, applyValidations, createOrderCtrl);

ordersRouter.get('/:id', validateJwt, getOrderByIdCtrl);

ordersRouter.delete('/:id', validateJwt, deleteOrderByIdCtrl)

export { ordersRouter };
