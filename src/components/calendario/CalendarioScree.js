// CalendarioScree.jsx

import React from "react";
import NavBar from "../ui/NavBar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es"; // Importa el idioma español
import "react-big-calendar/lib/css/react-big-calendar.css";
import CalendarioEvento from "./CalendarioEvento"; // Importa el componente CalendarioEvento
import { useState } from "react";
import CalendarioModal from "./CalendarioModal";
import CalendarioModal2 from "./CalendarioModal2";

const localizer = momentLocalizer(moment);

// Traducciones específicas para el calendario en español
const messages = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "No hay eventos en este rango",
};

const eventos = [
  {
    title: "Cumpleaños Julian",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    backgroundColor: "#fafafa",
    notas: "Agregar pañuelos", // Asegúrate de tener una propiedad 'nombre' en tu evento
    usuario: {
      _id: "123",
      nombre: "Julian",
    },
  },
];

const CalendarioScree = () => {
  const [ultimaVista, setUltimaVista] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const onDobleClick = () => {};
  const onEventoSeleccionado = () => {};
  const onCargaVista = (e) => {
    setUltimaVista(e);
    localStorage.setItem("lastView", e);
  };

  const estiloEvento = (evento) => ({
    backgroundColor: "#367CF7",
    borderRadius: "0px",
    opacity: 0.8,
    color: "white",
  });

  return (
    <div className="calendario-screen">
      <NavBar />
      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        messages={messages} // Proporciona las traducciones al calendario
        eventPropGetter={estiloEvento}
        onDoubleClickEvent={onDobleClick}
        onSelectEvent={onEventoSeleccionado}
        onView={onCargaVista}
        view={ultimaVista}
        components={{
          event: CalendarioEvento,
        }}
      />
      <CalendarioModal />
    </div>
  );
};

export default CalendarioScree;
