import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";

const Addobject = ({ AddUSerHandler, closeModal }) => {
	const [input, setInput] = useState({
		name: "",
		age: "",
		address: "",
		phone: "",
		gender: "",
	});

	const inputHandler = (e) => {
		const key = e.target.id;
		const value = e.target.value;
		setInput((prevState) => {
			return { ...prevState, [key]: value };
		});
	};
	const resetHandler = (e) => {
		setInput({
			name: "",
			age: "",
			address: "",
			phone: "",
			gender: "",
		});
	};
	const onSubmitHandler = (e) => {
		e.preventDefault();
		AddUSerHandler(input);
		closeModal();
		setInput({
			name: "",
			age: "",
			address: "",
			phone: "",
			gender: "",
		});
	};
	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<Form.Controller>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						id="name"
						placeholder="Name"
						value={input.name}
						onChange={inputHandler}
					/>
				</Form.Controller>
				<Form.Controller>
					<label htmlFor="age">age</label>
					<input
						type="number"
						id="age"
						placeholder="Age"
						value={input.age}
						onChange={inputHandler}
					/>
				</Form.Controller>
				<Form.Controller>
					<label htmlFor="address">adress</label>
					<input
						type="address"
						id="address"
						placeholder="address"
						value={input.address}
						onChange={inputHandler}
					/>
				</Form.Controller>
				<Form.Controller>
					<label htmlFor="phone">phone</label>
					<input
						type="text"
						id="phone"
						placeholder="phone"
						value={input.phone}
						onChange={inputHandler}
					/>
				</Form.Controller>
				<Form.Controller>
					<label htmlFor="gender">gender</label>
					<input
						type="text"
						id="gender"
						placeholder="gender"
						value={input.gender}
						onChange={inputHandler}
					/>
				</Form.Controller>
				<div style={{ margin: "20px 10px 10px 10px" }}>
					<Button type="submit" style={{ marginRight: "20px" }}>
						save
					</Button>
					<Button type="reset" onClick={resetHandler} value="reset">
						Reset
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Addobject;
