import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/database.js';

/**
 * @route POST /api/register
 * @group Auth - Operations about user authentication
 * @param {User} user.body.required - User registration object
 * @returns {object} 201 - User registered
 * @returns {Error} 400 - User already exists
 * @returns {Error} 500 - Internal server error
 */
export const register = async(req, res) => {
    try {
        const { username, email, password, full_name } = req.body;

        // Verificar si el usuario ya existe
        const [existingUser] = await pool.query(
            'SELECT * FROM users WHERE email = ? OR username = ?', [email, username]
        );

        if (existingUser.length > 0) {
            return res.status(400).json({ message: 'El usuario o email ya existe' });
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear usuario
        const [result] = await pool.query(
            'INSERT INTO users (username, email, password, full_name) VALUES (?, ?, ?, ?)', [username, email, hashedPassword, full_name]
        );

        // Generar token
        const token = jwt.sign({ id: result.insertId, username, role: 'student' },
            process.env.JWT_SECRET || 'midas_secret', { expiresIn: '24h' }
        );

        res.status(201).json({
            message: 'Usuario registrado exitosamente',
            token,
            user: { id: result.insertId, username, email, full_name, role: 'student' }
        });
    } catch (error) {
        console.error('Error en registro:', error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

/**
 * @route POST /api/login
 * @group Auth - Operations about user authentication
 * @param {User} user.body.required - User login object
 * @returns {object} 200 - User logged in
 * @returns {Error} 401 - Invalid credentials
 * @returns {Error} 500 - Internal server error
 */
export const login = async(req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar usuario
        const [users] = await pool.query(
            'SELECT * FROM users WHERE email = ?', [email]
        );

        if (users.length === 0) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const user = users[0];

        // Verificar contraseña
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar token
        const token = jwt.sign({ id: user.id, username: user.username, role: user.role },
            process.env.JWT_SECRET || 'midas_secret', { expiresIn: '24h' }
        );

        res.json({
            message: 'Login exitoso',
            token,
            user: { id: user.id, username: user.username, email: user.email, role: user.role }
        });
    } catch (error) {
        console.error('Error en login:', error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

/**
 * @route PUT /api/users/:id
 * @group Auth - Operations about user authentication
 * @param {User} user.body.required - User object to update
 * @returns {object} 200 - User updated
 * @returns {Error} 400 - User not found
 * @returns {Error} 500 - Internal server error
 */
export const editUser = async(req, res) => {
    const userId = req.params.id;
    const { username, email, full_name } = req.body;

    try {
        // Verificar si el usuario existe
        const [existingUser] = await pool.query(
            'SELECT * FROM users WHERE id = ?', [userId]
        );

        if (existingUser.length === 0) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Actualizar usuario
        await pool.query(
            'UPDATE users SET username = ?, email = ?, full_name = ? WHERE id = ?', [username, email, full_name, userId]
        );

        res.json({ message: 'Usuario actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ message: 'Error al actualizar usuario' });
    }
};