"use client";
import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  // Estado para almacenar el tiempo actual en segundos
  const [time, setTime] = useState<number>(0);

  // Función para iniciar el temporizador
  const startTimer = () => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1); // Incrementa el tiempo cada segundo
    }, 1000); 
    return () => clearInterval(interval); // Limpia el temporizador 
  };

  
  useEffect(() => {
    const cleanup = startTimer();
    return () => cleanup();
  }, []);

  // Convertir el tiempo en segundos a un formato legible (minutos:segundos)
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <h2>Temporizador</h2>
      <p>Tiempo transcurrido: {formatTime(time)}</p>
    </div>
  );
};

export default Timer;
