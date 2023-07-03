import React, { useState } from "react";
import Header from "../components/header/Header";
import AddTodos from "../components/todo/AddTodos";
import Todos from "../components/todo/Todos";
import { Box } from "@mui/material";

const Home = () => {
	const [todos, setTodos] = useState([]);

	return (
		<div>
			<Header />
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					width: "100%",
					height: "100%",
				}}
				mt={3}
			>
				<AddTodos todos={todos} setTodos={setTodos} />
				<Todos todos={todos} setTodos={setTodos} />
			</Box>
		</div>
	);
};

export default Home;
