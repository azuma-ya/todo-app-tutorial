import React, { useState } from "react";
import Header from "../components/header/Header";
import AddTodos from "../components/todo/AddTodos";
import Todos from "../components/todo/Todos";

const Home = () => {
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<Header />
			<AddTodos todos={todos} setTodos={setTodos} />
			<Todos todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default Home;
