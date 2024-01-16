import "./Modal.css";

function Modal({ children, onClose }) {
  return (
    <div
      className="modal_Container"
      onClick={(e) => {
        if (e.target.className === "modal_Container") {
          onClose();
        }
      }}
      onKeyDown={(e) => {
        if (e.target.className === "modal_Container") {
          onClose();
        }
      }}
      tabIndex={-8}
      role="button"
    >
      <div className="modal">{children}</div>
    </div>
  );
}

export default Modal;
