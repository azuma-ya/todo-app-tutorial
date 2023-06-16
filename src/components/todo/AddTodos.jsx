import React, { useRef } from "react";
import { v4 as uuid } from "uuid";

const AddTodos = ({ todos, setTodos }) => {
	const title = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (title.current.value === "") return;

		const newTodo = {
			id: uuid(),
			title: title.current.value,
			desc: "",
			checked: false,
		};
		setTodos([...todos, newTodo]);
		title.current.value = "";
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" ref={title} />
			<button type="submit">追加</button>
		</form>
	);
};

export default AddTodos;
