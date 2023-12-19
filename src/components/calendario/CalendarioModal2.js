import React, { useState } from "react";
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const CalendarioModal2 = () => {
  // Estado del modal
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Función para abrir el modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Función a ejecutar después de abrir el modal
  const afterOpenModal = () => {
    // Puedes dejarla vacía si no necesitas nada específico
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // JSX del componente
  return (
    <div>
      {/* Botón para abrir el modal */}
      <button onClick={openModal}>Abrir Modal</button>

      {/* Componente Modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        {/* Contenido del modal */}
        <h1>Nuevo evento</h1>
        <hr />

        {/* Formulario */}
        <form className="container">
          {/* Fecha y hora de inicio */}
          <div className="form-group mb-2">
            <label>Fecha y hora inicio</label>
            <input className="form-control" placeholder="Fecha inicio" />
          </div>

          {/* Fecha y hora de fin */}
          <div className="form-group mb-2">
            <label>Fecha y hora fin</label>
            <input className="form-control" placeholder="Fecha fin" />
          </div>

          <hr />

          {/* Título y notas */}
          <div className="form-group mb-2">
            <label>Título y notas</label>
            <input
              type="text"
              className="form-control"
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
            />
            <small id="emailHelp" className="form-text text-muted">
              Una descripción corta
            </small>
          </div>

          <div className="form-group mb-2">
            <textarea
              type="text"
              className="form-control"
              placeholder="Notas"
              rows="5"
              name="notes"
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
              Información adicional
            </small>
          </div>

          {/* Botón de guardar */}
          <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>

        {/* Botón para cerrar el modal */}
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default CalendarioModal2;
