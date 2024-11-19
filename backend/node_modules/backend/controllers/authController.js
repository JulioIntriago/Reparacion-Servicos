const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');

exports.register = async (req, res) => {
    const { fullName, email, password } = req.body;

    // Validaciones básicas
    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios.' });
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({ message: 'El email no es válido.' });
    }

    if (!validator.isStrongPassword(password, { minLength: 6 })) {
        return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres, incluyendo letras y números.' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullName, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente.' });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: 'El email ya está registrado.' });
        } else {
            res.status(500).json({ message: 'Error al registrar usuario.' });
        }
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'El email y la contraseña son obligatorios.' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Email o contraseña incorrectos.' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Email o contraseña incorrectos.' });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión.' });
    }
};
