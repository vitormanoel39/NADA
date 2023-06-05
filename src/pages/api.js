import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000' // ou a URL onde seu servidor json-server está sendo executado
});

export const fetchTodos = async () => {
  const response = await api.get('/todos');
  return response.data;
};

export const createTodo = async (todo) => {
  const response = await api.post('/todos', todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await api.delete(`/todos/${id}`);
};

export default api;