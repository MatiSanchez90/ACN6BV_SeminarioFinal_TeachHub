import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Hook para redirigir

  // Simulación de credenciales
  const validCredentials = {
    username: "mati",
    password: "1234",
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === validCredentials.username && password === validCredentials.password) {
      setError("");
      navigate("/home"); // Redirige al Home
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>
          Aprende sin límites, desde cualquier lugar del <span>mundo</span>.
        </h1>
        <div className="divider" />
      </div>
      <div className="login-right">
        <div className="login-box">
          <img
            src="https://via.placeholder.com/150" // Reemplaza con el logo de TeachHub
            alt="Teach Hub Logo"
            className="logo"
          />
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="username">USUARIO</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Tu usuario"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">PASSWORD</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Tu contraseña"
                required
              />
            </div>
            <button type="submit" className="login-btn">
              INGRESAR
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <p className="register-link">
            NO ESTÁS REGISTRADO? <a href="register">CLICK AQUÍ</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
