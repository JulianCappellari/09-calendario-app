// CalendarioEvento.jsx
import React from "react";

const CalendarioEvento = ({ event }) => {
  // Cambia 'event' por 'evento'
  const { title, usuario } = event;


  return (
    <div>
      <strong>{title}</strong>
      <span>- {usuario.nombre}</span>
    </div>
  );
};

export default CalendarioEvento;
