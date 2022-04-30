import "./Modal.css"

const Modal = (props) => {
    return (
        <>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="modal-close-button">
                        <button  onClick={() => props.setOnClose(false)}>X</button>
                    </div>
                    <div className="modal-header">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="modal-body">
                        {props.result}
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => props.setOnClose(false)}>Close</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;