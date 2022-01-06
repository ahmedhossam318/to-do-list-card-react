import React from "react";
import styles from "./Card.module.css";

const card = ({ id, name, age, phone, adress, gender, deletefunc }) => {
	return (
		<div
			className={styles.cardWrapper}
			style={{ backgroundColor: gender === "boy" ? "pink" : "lightgray" }}
		>
			<div>Name: {name}</div>
			<div>Age: {age}</div>
			<div>phone: {phone} </div>
			<div>Address: {adress}</div>
			<div>gender: {gender}</div>
			<div
				className={styles.deleteBtn}
				onClick={(event) => deletefunc(event, id)}
			>
				X
			</div>
		</div>
	);
};

export default card;
