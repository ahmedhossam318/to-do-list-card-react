import React, { useState } from "react";
import styles from "./FilterInput.module.css";
const FilterInput = ({ filteration }) => {
	const [filter, setfilter] = useState("");

	const filterHandler = (e) => {
		const name = e.target.value;
		setfilter(name);
		filteration(name);
	};
	return (
		<div className={styles.mp}>
			<input
				type="text"
				placeholder="for type ref"
				value={filter}
				onChange={filterHandler}
			/>
		</div>
	);
};

export default FilterInput;
