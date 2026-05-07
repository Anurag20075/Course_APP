import React, { useState } from 'react';

export function AddCourseForm() {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    instructor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your add course logic here (e.g., API call, state update)
    console.log('Course Submitted:', course);

    // Reset form after submission
    setCourse({
      title: '',
      description: '',
      instructor: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {/* Title Field */}
        <div style={styles.formGroup}>
          <label htmlFor="title" style={styles.label}>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={course.title}
            onChange={handleChange}
            placeholder="Enter course title"
            required
            style={styles.input}
          />
        </div>

        {/* Description Field */}
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.label}>Description</label>
          <textarea
            id="description"
            name="description"
            value={course.description}
            onChange={handleChange}
            placeholder="Enter course description"
            rows="4"
            required
            style={styles.textarea}
          />
        </div>

        {/* Instructor Field */}
        <div style={styles.formGroup}>
          <label htmlFor="instructor" style={styles.label}>Instructor</label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={course.instructor}
            onChange={handleChange}
            placeholder="Enter instructor's name"
            required
            style={styles.input}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>
          Add Course
        </button>
      </form>
    </div>
  );
}

// Basic Inline Styles
const styles = {
  container: {
    maxWidth: '500px',
    margin: '2rem auto',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    fontFamily: 'sans-serif',
    backgroundColor: '#ffffff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
  },
  label: {
    fontWeight: '600',
    color: '#333',
  },
  input: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    resize: 'vertical',
  },
  button: {
    padding: '0.75rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};