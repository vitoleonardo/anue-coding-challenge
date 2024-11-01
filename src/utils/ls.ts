import { toast } from 'react-toastify';
import { Todo } from '@/context/TodoContext'; // Import your Todo type

interface Alert {
  state: 'success' | 'error' | 'info' | 'warning'; // Assuming these are the possible states
  note: string;
}
// Helper function to get the current todos from localStorage
const getTodosFromLS = (key: string): Todo[] => {
  const lsItems = localStorage.getItem(key);
  return lsItems ? JSON.parse(lsItems) : [];
};
export const handleSetLSItem = (key: string, newTodo: Todo) => {
  try {
    const todos = getTodosFromLS(key);

    // Check if a todo with the same itemName already exists
    const existingTodo = todos.find((todo) => todo.id === newTodo.id);

    if (existingTodo) {
      notify({ state: 'info', note: `${newTodo.itemName} already exists!` });
      return; // Quit the function if the todo already exists
    }

    // If no existing todo was found, add the new todo
    localStorage.setItem(key, JSON.stringify([...todos, newTodo]));
    notify({
      state: 'success',
      note: `Successfully added ${newTodo.itemName}!`,
    });
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
    notify({ state: 'error', note: `Error adding ${newTodo.itemName}!` });
  }
};

export const handleGetLSItem = (key: string): Todo[] | null => {
  try {
    const todos = getTodosFromLS(key);
    notify({ state: 'success', note: 'Successfully retrieved todos!' });
    return todos;
  } catch (error) {
    console.error('Error getting items from localStorage:', error);
    notify({ state: 'error', note: 'Error retrieving todos!' });
    return null;
  }
};

export const handleUpdateLSItem = (key: string, updatedTodo: Todo) => {
  try {
    const todos = getTodosFromLS(key);
    const updatedTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    localStorage.setItem(key, JSON.stringify(updatedTodos));
    notify({ state: 'success', note: 'Successfully updated todo!' });
  } catch (error) {
    console.error('Error updating item in localStorage:', error);
    notify({ state: 'error', note: 'Error updating todo!' });
  }
};

export const handleRemoveLSItem = (key: string, id: string) => {
  try {
    const todos = getTodosFromLS(key);
    const deletedTodo = todos.find((todo) => todo.id === id);

    if (!deletedTodo) {
      notify({ state: 'info', note: 'Todo not found!' });
      return;
    }

    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(key, JSON.stringify(updatedTodos));
    notify({
      state: 'success',
      note: `Successfully deleted ${deletedTodo.itemName}!`,
    });
  } catch (error) {
    console.error('Error removing item from localStorage:', error);
    notify({ state: 'error', note: 'Error deleting todo!' });
  }
};

export const notify = (alert: Alert) => {
  if (alert) {
    const { state, note } = alert;
    if (state && note && toast[state]) {
      console.log(alert);
      toast[state](note, {
        position: 'bottom-center',
        closeOnClick: true,
      });
    } else {
      toast?.error('Error displaying notification'); // Default to an error toast
    }
  }
};
