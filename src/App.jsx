import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { db } from "./firebase";
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  // Fetch todos from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      const todosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        order: doc.data().order
      })).sort((a, b) => a.order - b.order);
      setTodos(todosData);
    });
    return () => unsubscribe();
  }, []);

  // Add new todo to Firestore
  const handleAddTodos = async (todoValue) => {
    try {
      if (todoValue.trim() !== '') {
        const newOrder = todos.length > 0 ? todos[todos.length - 1].order + 1 : 1;
        await addDoc(collection(db, 'todos'), { todo: todoValue, order: newOrder });
        setTodoValue('');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // Delete todo from Firestore
  const handleDeleteTodos = async (id) => {
    try {
      await deleteDoc(doc(db, 'todos', id));
    } catch (error) {
      console.log(error.message);
    }
  };

  // Prepare todo for editing
  const handleEditTodos = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    handleDeleteTodos(id);
    setTodoValue(todoToEdit.todo);
    
  };

  // Move up todo in the list
  const handleMoveUpTodos = async (index) => {
    if (index > 0) {
      const newTodoList = [...todos];
      const currentTodo = newTodoList[index];
      const previousTodo = newTodoList[index - 1];

      // Swap the order values
      const tempOrder = currentTodo.order;
      currentTodo.order = previousTodo.order;
      previousTodo.order = tempOrder;

      // Update Firestore
      const docRef1 = doc(db, 'todos', currentTodo.id);
      const docRef2 = doc(db, 'todos', previousTodo.id);
      await updateDoc(docRef1, { order: currentTodo.order });
      await updateDoc(docRef2, { order: previousTodo.order });

      // Update local state
      newTodoList[index] = previousTodo;
      newTodoList[index - 1] = currentTodo;
      setTodos(newTodoList);
    }
  };

  // Move down todo in the list
  const handleMoveDownTodos = async (index) => {
    if (index < todos.length - 1) {
      const newTodoList = [...todos];
      const currentTodo = newTodoList[index];
      const nextTodo = newTodoList[index + 1];

      // Swap the order values
      const tempOrder = currentTodo.order;
      currentTodo.order = nextTodo.order;
      nextTodo.order = tempOrder;

      // Update Firestore
      const docRef1 = doc(db, 'todos', currentTodo.id);
      const docRef2 = doc(db, 'todos', nextTodo.id);
      await updateDoc(docRef1, { order: currentTodo.order });
      await updateDoc(docRef2, { order: nextTodo.order });

      // Update local state
      newTodoList[index] = nextTodo;
      newTodoList[index + 1] = currentTodo;
      setTodos(newTodoList);
    }
  };

  return (
    <>
      <TodoInput 
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        handleAddTodos={handleAddTodos} 
      />
      <TodoList 
        handleMoveDownTodos={handleMoveDownTodos} 
        handleMoveUpTodos={handleMoveUpTodos} 
        handleEditTodos={handleEditTodos} 
        handleDeleteTodos={handleDeleteTodos} 
        todos={todos} 
      />
    </>
  );
}

export default App;
