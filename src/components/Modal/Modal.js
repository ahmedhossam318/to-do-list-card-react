import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const BackDrop = ({ show, close }) => {
	return (
		<div
			className={`${styles.backDrop} ${show ? styles.showBackDrop : null}`}
			onClick={close}
		></div>
	);
};
const Overlay = ({ children, show }) => {
	return (
		<div className={`${styles.overlay} ${show ? styles.showOVerlay : null}`}>
			{children}
		</div>
	);
};

const Modal = ({ children, show, closeModal }) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Fragment>
					<BackDrop close={closeModal} show={show} />
					<Overlay show={show}>{children}</Overlay>
				</Fragment>,
				document.getElementById("modal")
			)}
		</Fragment>
	);
};

export default Modal;
