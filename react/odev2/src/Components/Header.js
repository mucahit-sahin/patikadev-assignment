import React from "react";

const Header = ({ setTodos }) => {
  const [item, setItem] = React.useState({ value: "", checked: false });
  function addElement(e) {
    e.preventDefault();
    if (item.value.trim() !== "") {
      setTodos((todos) => [...todos, item]);
    }
  }
  return (
    <header class="header">
      <h1>todos</h1>
      <form onSubmit={(e) => addElement(e)}>
        <input
          class="new-todo"
          placeholder="What needs to be done?"
          onChange={(e) => setItem({ ...item, value: e.target.value })}
          autofocus
        />
      </form>
    </header>
  );
};

export default Header;
