// src/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Redirige al login al cerrar sesión
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Bienvenido al Home</h1>
      <p>¡Has iniciado sesión correctamente!</p>
      <button onClick={handleLogout} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Home;
