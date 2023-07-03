import React, { useEffect } from "react";
import Todo from "./Todo";
import { Stack } from "@mui/material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import db from "../../utlis/firebase";

const Todos = ({ todos, setTodos }) => {
	useEffect(() => {
		const postData = collection(db, "posts");
		const q = query(postData, orderBy("timestamp", "desc"));
		// getDocs(q).then((querySnapshot) => {
		// 	setPosts(querySnapshot.docs.map((doc) => doc.data()));
		// });

		//リアルタイムで取得
		onSnapshot(q, (querySnapshot) => {
			setTodos(querySnapshot.docs.map((doc) => doc.data()));
		});
	}, []);

	return (
		<Stack>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</Stack>
	);
};

export default Todos;
