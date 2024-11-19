const Order = require('../models/Order');
const validator = require('validator');

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las órdenes.' });
    }
};

exports.createOrder = async (req, res) => {
    const { cliente, status, modelo, prioridad } = req.body;

    // Validaciones de campos obligatorios
    if (!cliente || !status || !modelo || !prioridad) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    // Validación de longitud de cadena
    if (!validator.isLength(cliente, { min: 3 })) {
        return res.status(400).json({ message: 'El nombre del cliente debe tener al menos 3 caracteres.' });
    }

    if (!['En proceso', 'Completado', 'Pendiente'].includes(status)) {
        return res.status(400).json({ message: 'Estado de la orden no válido.' });
    }

    if (!['Alta', 'Media', 'Baja'].includes(prioridad)) {
        return res.status(400).json({ message: 'La prioridad debe ser Alta, Media o Baja.' });
    }

    try {
        const order = new Order({ cliente, status, modelo, prioridad });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la orden.' });
    }
};
