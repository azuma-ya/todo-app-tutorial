import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, setTodos }) => {
	return (
		<div>
			{todos.map((todo) => (
				<Todo todo={todo} />
			))}
		</div>
	);
};

export default Todos;
