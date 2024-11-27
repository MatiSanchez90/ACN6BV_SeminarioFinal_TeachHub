// src/Register.js
import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    domicilio: "",
    email: "",
    password: "",
    tipoUsuario: "ESTUDIANTE",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Usuario registrado con éxito");
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h2>Teach Hub</h2>
        <p>Aprendizaje sin fronteras.</p>
      </div>
      <div className="register-right">
        <h1>CREAR USUARIO</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">NOMBRE</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido">APELLIDO</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Tu apellido"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="domicilio">DOMICILIO</label>
            <input
              type="text"
              id="domicilio"
              name="domicilio"
              value={formData.domicilio}
              onChange={handleChange}
              placeholder="Tu domicilio"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Tu contraseña"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipoUsuario">ESTUDIANTE O PROFESOR</label>
            <select
              id="tipoUsuario"
              name="tipoUsuario"
              value={formData.tipoUsuario}
              onChange={handleChange}
            >
              <option value="ESTUDIANTE">ESTUDIANTE</option>
              <option value="PROFESOR">PROFESOR</option>
            </select>
          </div>
          <button type="submit" className="register-btn">
            INGRESAR
          </button>
        </form>
        <p className="login-link">
          TENÉS UNA CUENTA? <a href="/">CLICK AQUÍ</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
