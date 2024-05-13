"use client";
import React, { useState } from 'react';

// Definir el tipo de los estados y los manejadores de eventos como el del input
interface InputFormState {
  inputValue: string;
}

const InputForm: React.FC = () => {
  // Estado para almacenar el valor del campo de entrada
  const [inputState, setInputState] = useState<InputFormState>({
    inputValue: '',
  });

  // Manejador de cambio para el campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputState({ inputValue: value });
  };

  // Manejador de envío del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Valor del campo de entrada:', inputState.inputValue);
  };

  return (
    <div>
      <h2>Input Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Ingrese un texto:
          <input
            type="text"
            value={inputState.inputValue}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default InputForm;
