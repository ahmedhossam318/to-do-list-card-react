import React, { useState, Fragment } from "react";
import CardList from "../components/CardList/cardList";
import styles from "./App.module.css";
import FilterInput from "../components/filter/FilterInput";
import Modal from "../components/Modal/Modal";
import Button from "../components/Layout/Button";
import Addobject from "../components/Addobject/Addobject";
const App = () => {
	// const inputEl = useRef(null);
	const [showModal, setShowModal] = useState(false);
	const [filter, setfilter] = useState("");
	const [cardToggle, setCardToggle] = useState(true);
	const [state, setState] = useState([
		{
			id: 1,
			name: "ahmed",
			age: 23,
			adress: "46 -  rehan st",
			phone: "01121544748",
			gender: "boy",
		},
		{
			id: 2,
			name: "sara",
			age: 21,
			adress: "46 -  rehan st",
			phone: "011221324748",
			gender: "girl",
		},
		{
			id: 3,
			name: "omar",
			age: 25,
			adress: "478 - rehan st",
			phone: "01121568545",
			gender: "boy",
		},
		{
			id: 4,
			name: "farah",
			age: 22,
			adress: "478 - rehan st",
			phone: "0112132545",
			gender: "girl",
		},
		{
			id: 5,
			name: "ali",
			age: 29,
			adress: "489 - rehan st",
			phone: "01154468848",
			gender: "boy",
		},
	]);

	const AddUSerHandler = (user) => {
		user = { id: state.length + 1, ...user };

		setState((prevState) => setState([...prevState, { ...user }]));

		console.log(user);
	};
	const deleteElements = (event, selectedId) => {
		// const deletedOperations = state.filter((el, idx) => clickedidx !== idx);
		// console.log(deletedOperations);
		// setState(deletedOperations);
		setState((prevState) => {
			return prevState.filter((el) => selectedId !== el.id);
		});
	};
	const toggleHandler = () => {
		setCardToggle(!cardToggle);
	};
	// const testHandler = () => {
	// 	console.log(inputEl.current.value);
	// };
	//
	// const onClick = () => {
	// 	inputEl.current.focus();
	// };

	const namesHandlers = () => {
		if (filter.length !== 0) {
			return state.filter((el) => el.name.includes(filter));
		}
		return state;
	};

	const filterNames = (name) => {
		setfilter(name);
	};

	return (
		<Fragment>
			<div className={styles.mainContainer}>
				<h1>List of users</h1>
				<div className={styles.divBtn}>
					<Button style={{ marginRight: "20px" }} onClick={toggleHandler}>
						{cardToggle ? "Hide Names" : "Show Names"}
					</Button>

					<Button onClick={() => setShowModal(true)}>New Record</Button>
				</div>

				<div className={cardToggle ? styles.show : styles.hide}>
					<FilterInput filteration={filterNames} />

					<CardList
						nameList={namesHandlers()}
						color="pink"
						deletefunc={deleteElements}
					/>
				</div>
			</div>
			<Modal show={showModal} closeModal={() => setShowModal(false)}>
				<Addobject
					AddUSerHandler={AddUSerHandler}
					closeModal={() => setShowModal(false)}
				/>
			</Modal>
		</Fragment>
	);
};

export default App;
