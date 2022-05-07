import "./Modal.css"

const Modal = ({title, result, setOnClose, hidingId}) => {
    const handelClick = () => {
        setOnClose(false);
        document.getElementById(hidingId).classList.remove("hide");
    }
    return (
        <>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="modal-close-button">
                        <button  onClick={handelClick}>X</button>
                    </div>
                    <div className="modal-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="modal-body">
                        {result}
                    </div>
                    <div className="modal-footer">
                        <button onClick={handelClick}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;