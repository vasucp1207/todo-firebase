import React from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import './App.css';
import Todo from './components/Todo';
import db from './firebase'
import firebase from 'firebase/compat/app';

function App() {

  const [todos, setTodos] = React.useState([])
  const [input, setInput] = React.useState('')

  // when the app loads we need to listen to the database and fetch new todos as they get removed or added

  React.useEffect(() => {
    // this fires when the app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  },[]);

  const addTodo = (event) => {
    event.preventDefault()   // will stop the refresh
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Set your Goals</h1>
      <form className='form'>
        <FormControl>
          <InputLabel>Add todos</InputLabel>
          <Input value = {input} onChange = {event => setInput(event.target.value)}/>
          <FormHelperText></FormHelperText>
        </FormControl>
        <Button disabled={!input} type = 'submit' onClick={addTodo} variant="outlined">Add todo</Button>
      </form>
  
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
      </ul>

    </div>
  );
}

export default App; 