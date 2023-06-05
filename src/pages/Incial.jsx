import { Container } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import { List, dividerClasses } from '@mui/material';
import TodoItem from '../components/TodoItem';
import { fetchTodos, createTodo, deleteTodo } from './api';

export default function Inicial() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const todosData = await fetchTodos();
      setTodos(todosData);
    };

    fetchData();
  }, []);

  const addTodo = async (todo) => {
    const newTodo = await createTodo(todo);
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: '1em' }}>
      <Form addTodo={addTodo} />
      <List sx={{ width: '100%', marginTop: '1em' }}>
        {todos.map((todo, key) => (
          <div key={todo.id} style={{ marginTop: '1em' }}>
            <TodoItem todo={todo} deleteTodo={handleDeleteTodo} />
          </div>
        ))}
      </List>
    </Container>
  );
}