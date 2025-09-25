// Start-state: initialt state för appen
const initialState = {
  todos: [], // Array som kommer hålla alla todos
  counter: 0, // Räknare för antal todos
};

// Reducer – tar emot nuvarande state och en action, returnerar nytt state
export function reducer(state = initialState, action) {
  switch (action.type) {
    // Lägg till en ny todo
    case "ADD_TODO":
      return {
        ...state, // Behåll allt annat i state oförändrat
        todos: [
          ...state.todos, // Kopiera befintliga todos
          { id: Date.now(), text: action.payload, done: false }, // Lägg till ny todo med id och done=false
        ],
        counter: state.counter + 1, // Öka räknaren med 1
      };

    // Ta bort en todo
    case "REMOVE_TODO":
      return {
        ...state, // Behåll allt annat i state
        todos: state.todos.filter((todo) => todo.id !== action.payload), // Filtrera bort todo med matchande id
        counter: state.counter - 1, // Minska räknaren med 1
      };

    // Markera en todo som klar
    case "DONE":
      return {
        ...state, // Behåll allt annat i state
        todos: state.todos.map((todo) => {
          // Gå igenom alla todos
          if (todo.id == action.payload) {
            // Hitta todo med matchande id
            return { ...todo, done: true }; // Sätt done till true
          }
          return todo; // Alla andra todos lämnas oförändrade
        }),
      };

    // Om action inte matchar något case, returnera nuvarande state
    default:
      return state;
  }
}
