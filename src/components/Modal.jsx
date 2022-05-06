import "./Modal.css"

const Modal = (props) => {
    const handelClick = () => {
        props.setOnClose(false);
        document.getElementById("prediction").classList.remove("hide");
    }
    return (
        <>
            <div className="modal-container">
                <div className="modal-content">
                    <div className="modal-close-button">
                        <button  onClick={handelClick}>X</button>
                    </div>
                    <div className="modal-header">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="modal-body">
                        {props.result}
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