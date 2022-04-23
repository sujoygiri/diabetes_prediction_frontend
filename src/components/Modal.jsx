import ModalReact from "react-modal"
import "./Modal.css"

ModalReact.setAppElement("#_root");
const Modal = (props) => {
    return (
        <>
            <ModalReact isOpen={props.isOpen}>
                {props.result === 1 && <h1>You are at risk of diabetes</h1>}
                {props.result === 0 && <h1>You are not at risk of diabetes</h1>}
                <button onClick={props.handelModal}>Close Result</button>
            </ModalReact>
        </>
    )
}

export default Modal;