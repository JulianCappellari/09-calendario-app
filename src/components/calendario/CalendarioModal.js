import React, { useState } from "react";
import Modal from "react-modal";

// Importa los estilos de Bootstrap 5


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

const CalendarioModal = () => {
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
      <button className="btn btn-primary" onClick={openModal}>
        Abrir Modal
      </button>

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
        {modalIsOpen && (
          <form className="container">
            <div className="mb-2">
              <label htmlFor="fechaInicio" className="form-label">
                Fecha y hora inicio
              </label>
              <input
                type="text"
                className="form-control"
                id="fechaInicio"
                placeholder="Fecha inicio"
              />
            </div>

            <div className="mb-2">
              <label htmlFor="fechaFin" className="form-label">
                Fecha y hora fin
              </label>
              <input
                type="text"
                className="form-control"
                id="fechaFin"
                placeholder="Fecha fin"
              />
            </div>

            <hr />
            <div className="mb-2">
              <label htmlFor="titulo" className="form-label">
                Título y notas
              </label>
              <input
                type="text"
                className="form-control"
                id="titulo"
                placeholder="Título del evento"
                name="title"
                autoComplete="off"
              />
              <small id="emailHelp" className="form-text text-muted">
                Una descripción corta
              </small>
            </div>

            <div className="mb-2">
              <textarea
                className="form-control"
                id="notas"
                placeholder="Notas"
                rows="5"
                name="notes"
              ></textarea>
              <small id="emailHelp" className="form-text text-muted">
                Información adicional
              </small>
            </div>

            <button type="submit" className="btn btn-outline-primary btn-block">
              <i className="far fa-save"></i>
              <span> Guardar</span>
            </button>
          </form>
        )}

        {/* Botón para cerrar el modal */}
        <button className="btn btn-secondary" onClick={closeModal}>
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default CalendarioModal;
