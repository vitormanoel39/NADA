import { Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);
  const [error, setError] = useState(null);
  const [saved, setSaved] = useState(false);

  const todoCreate = (text) => {
    try {
      if (text.trim() === "") {
        throw new Error("A tarefa não pode estar vazia."); // Lança uma exceção se a tarefa estiver vazia
      }

      const todoObj = { text: text, id };
      setId(id + 1);
      addTodo(todoObj);
      setText(""); // Limpa o campo de texto após adicionar a tarefa
      setError(null); // Limpa o erro caso ele tenha sido exibido anteriormente
      setSaved(true); // Define que a anotação foi salva com sucesso
      setTimeout(() => setSaved(false), 3000); // Remove a mensagem de saudação após 3 segundos
    } catch (error) {
      setError(error.message); // Define a mensagem de erro
    }
  };

  return (
    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          value={text || ""}
          fullWidth
        />
        <Button variant="text" onClick={() => todoCreate(text)}>
          ADD
        </Button>
      </div>

      {error && (
        <div style={{ color: "red", textAlign: "center", marginTop: "0.5em" }}>{error}</div>
      )}

      {saved && (
        <div style={{ color: "green", textAlign: "center", marginTop: "0.5em" }}>Anotação salva com sucesso!</div>
      )}
    </Paper>
  )
}
