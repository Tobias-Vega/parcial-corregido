import { createOrder, getOrders, getOrderById, deleteOrderById } from "../models/order.model.js";

export const createOrderCtrl = async (req, res) => {
  const userId = req.user.id;
  const { coffee } = req.body;

  const order = await createOrder(coffee, userId);

  res.status(201).json(order);
};

export const getOrdersCtrl = async (req, res) => {
  const userId = req.user.id
  const orders = await getOrders(userId)
  
  res.status(200).json(orders);
};

export const getOrderByIdCtrl = async (req,res) => {
  const { id } = req.params;
  const { user } = req;

  const order = await getOrderById(id, user.id);

  if(!order) {
    return res.status(404).json({ msg: 'Order not found' })
  }

  res.status(200).json(order)

};

export const deleteOrderByIdCtrl = async (req,res) => {
  const { id } = req.params
  const { user } = req;

  const deleteOrder = await deleteOrderById(id, user.id);

  if (!deleteOrder) {
    return res.status(404).json({ msg: 'Order not found' })
  }
  res.status(204).send()
}
