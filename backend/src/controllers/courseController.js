import pool from '../config/database.js';

export const getAllCourses = async(req, res) => {
    try {
        const [courses] = await pool.query(`
      SELECT c.*, u.username as instructor_name 
      FROM courses c 
      LEFT JOIN users u ON c.instructor_id = u.id
    `);
        res.json(courses);
    } catch (error) {
        console.error('Error al obtener cursos:', error);
        res.status(500).json({ message: 'Error al obtener los cursos' });
    }
};

export const getCourseById = async(req, res) => {
    try {
        const { id } = req.params;
        const [courses] = await pool.query(`
      SELECT c.*, u.username as instructor_name 
      FROM courses c 
      LEFT JOIN users u ON c.instructor_id = u.id 
      WHERE c.id = ?
    `, [id]);

        if (courses.length === 0) {
            return res.status(404).json({ message: 'Curso no encontrado' });
        }

        const course = courses[0];

        // Obtener lecciones del curso
        const [lessons] = await pool.query(
            'SELECT * FROM lessons WHERE course_id = ? ORDER BY order_number', [id]
        );

        res.json({...course, lessons });
    } catch (error) {
        console.error('Error al obtener curso:', error);
        res.status(500).json({ message: 'Error al obtener el curso' });
    }
};

export const createCourse = async(req, res) => {
    try {
        const { title, description, price, level, duration, instructor_id } = req.body;

        const [result] = await pool.query(
            'INSERT INTO courses (title, description, price, level, duration, instructor_id) VALUES (?, ?, ?, ?, ?, ?)', [title, description, price, level, duration, instructor_id]
        );

        res.status(201).json({
            message: 'Curso creado exitosamente',
            courseId: result.insertId
        });
    } catch (error) {
        console.error('Error al crear curso:', error);
        res.status(500).json({ message: 'Error al crear el curso' });
    }
};

export const updateCourse = async(req, res) => {
    try {
        const { id } = req.params;
        const { title, description, price, level, duration } = req.body;

        await pool.query(
            'UPDATE courses SET title = ?, description = ?, price = ?, level = ?, duration = ? WHERE id = ?', [title, description, price, level, duration, id]
        );

        res.json({ message: 'Curso actualizado exitosamente' });
    } catch (error) {
        console.error('Error al actualizar curso:', error);
        res.status(500).json({ message: 'Error al actualizar el curso' });
    }
};

export const deleteCourse = async(req, res) => {
    try {
        const { id } = req.params;

        await pool.query('DELETE FROM courses WHERE id = ?', [id]);

        res.json({ message: 'Curso eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar curso:', error);
        res.status(500).json({ message: 'Error al eliminar el curso' });
    }
};