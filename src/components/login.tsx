"use client";
import React, { useState } from 'react';

// Definir el tipo de los estados y los manejadores de eventos como el de error en este caso
interface LoginState {
  username: string;
  password: string;
  error: string | null;
}


const Login: React.FC = () => {

  const [loginState, setLoginState] = useState<LoginState>({
    username: '',
    password: '',
    error: null,
  });

  // Manejador de cambio para los campos de entrada
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Manejador de envío del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = loginState;

    // Validación básica
    if (username.length < 3 || password.length < 6) {
      setLoginState((prevState) => ({
        ...prevState,
        error: 'Nombre de usuario y/o contraseña inválidos',
      }));
    } else {
      // Lógica de inicio de sesión (puedes implementarla aquí)
      console.log('Inicio de sesión exitoso');
      setLoginState((prevState) => ({ ...prevState, error: null }));
    }
  };

  return (
    <div>
      <h2>Inicio de sesión</h2>
      {loginState.error && <p style={{ color: 'red' }}>{loginState.error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de usuario:
          <input
            type="text"
            name="username"
            value={loginState.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="password"
            value={loginState.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
