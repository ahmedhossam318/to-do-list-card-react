import React from "react";
import styles from "./Form.module.css";

const Controller = (props) => {
	return <div className={styles.control}> {props.children} </div>;
};
const Form = (props) => {
	return <form onSubmit={props.onSubmit}>{props.children}</form>;
};
Form.Controller = Controller;

export default Form;
