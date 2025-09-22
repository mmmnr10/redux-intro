import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store/actions";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleAdd(e) {
    e.preventDefault();
    const text = e.target.elements.todo.value.trim();
    if (!text) return;
    dispatch(addTodo(text));
    e.target.reset();
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Redux Todo List</h1>
      <form onSubmit={handleAdd}>
        <input name="todo" placeholder="Lägg till todo" />
        <button type="submit">Add</button>
      </form>

      <p>Total todos: {todos.length}</p>

      <ul>
        {todos.map((t) => (
          <li key={t.id} style={{ marginBottom: ".5rem" }}>
            <span
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                marginRight: "1rem",
              }}
            >
              {t.text}
            </span>
            <button onClick={() => dispatch(toggleTodo(t.id))}>
              {t.completed ? "Undo" : "Complete"}
            </button>{" "}
            <button onClick={() => dispatch(removeTodo(t.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
