import React from "react";

const Footer = ({ filtered, setFiltered, todos, setTodos }) => {
  const [active, setActive] = React.useState(1);
  return (
    <footer class="footer">
      <span class="todo-count">
        <strong>{filtered.length}</strong>
        items left
      </span>

      <ul class="filters">
        <li>
          <a
            class={active === 1 && "selected"}
            href="#"
            onClick={() => {
              setFiltered(todos);
              setActive(1);
            }}
          >
            All
          </a>
        </li>
        <li>
          <a
            class={active === 2 && "selected"}
            href="#"
            onClick={() => {
              setFiltered(todos.filter((todo) => todo.checked === false));
              setActive(2);
            }}
          >
            Active
          </a>
        </li>
        <li>
          <a
            class={active === 3 && "selected"}
            href="#"
            onClick={() => {
              setFiltered(todos.filter((todo) => todo.checked === true));
              setActive(3);
            }}
          >
            Completed
          </a>
        </li>
      </ul>

      <button class="clear-completed" onClick={() => setTodos([])}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
