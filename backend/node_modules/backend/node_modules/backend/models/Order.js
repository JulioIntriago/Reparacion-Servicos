// backend/models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    cliente: { type: String, required: true },
    status: { type: String, required: true },
    modelo: { type: String, required: true },
    prioridad: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
