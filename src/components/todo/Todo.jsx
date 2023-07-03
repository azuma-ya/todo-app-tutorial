import { Box, IconButton, Paper } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const Todo = ({ todo }) => {
	return (
		<Paper
			elevation={2}
			sx={{
				width: "300px",
				height: "100%",
				margin: "10px",
				padding: "10px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}
		>
			<Box>
				<Checkbox />
				<Box component="span">{todo.title}</Box>
			</Box>
			<IconButton>
				<DeleteIcon />
			</IconButton>
		</Paper>
	);
};

export default Todo;
