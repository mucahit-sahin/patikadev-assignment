import React, { useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [todos, setTodos] = React.useState([
    { value: "Learn JavaScript", checked: true },
    { value: "Learn React", checked: false },
    { value: "Learn Angular", checked: false },
  ]);
  const [filtered, setFiltered] = React.useState(todos);
  React.useEffect(() => {
    setFiltered(todos);
  }, [todos]);
  return (
    <section class="todoapp">
      <Header setTodos={setTodos} />
      <Main filtered={filtered} setFiltered={setFiltered} />
      <Footer
        filtered={filtered}
        setFiltered={setFiltered}
        todos={todos}
        setTodos={setTodos}
      />
    </section>
  );
}

export default App;
