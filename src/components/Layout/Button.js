import React from "react";
import styles from "./Form.module.css";
const Button = (props) => {
	return (
		<button
			value={`${props.value ? props.value : ""}`}
			type={`${props.type ? props.type : "button"}`}
			style={props.style}
			onClick={props.onClick}
			className={styles.button}
		>
			{props.children}
		</button>
	);
};

export default Button;
