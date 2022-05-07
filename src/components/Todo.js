import { Button, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import './Todo.css'
import db from '../firebase'

function Todo(props) {
  return (
    <List className="todo_list">
        <ListItem className="todos">
            <ListItemText
                primary = {props.todo.todo}
            >
            </ListItemText>
        </ListItem>
        <Button className="button" variant="outlined" onClick={event =>
        db.collection('todos').doc(props.todo.id).delete()}>
        Delete Me</Button>
    </List>
  )
}

export default Todo