import { Box, Button, TextField } from "@mui/material";
import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import db from "../../utlis/firebase";

const AddTodos = ({ todos, setTodos }) => {
	const title = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (title.current.value === "") return;

		const newTodo = {
			id: uuid(),
			title: title.current.value,
			desc: "",
			checked: false,
			timestamp: serverTimestamp(),
		};

		try {
			await addDoc(collection(db, "posts"), newTodo);
			title.current.value = "";
		} catch (err) {
			alert(err);
		}
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%",
				height: "100%",
			}}
		>
			<TextField inputRef={title} />
			<Button variant="contained" type="submit" sx={{ margin: 2 }}>
				追加
			</Button>
		</Box>
	);
};

export default AddTodos;
