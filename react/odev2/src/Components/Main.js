import React from "react";

const Main = ({ filtered, setFiltered }) => {
  return (
    <section class="main">
      <input class="toggle-all" type="checkbox" />
      <label for="toggle-all"> Mark all as complete </label>

      <ul class="todo-list">
        {filtered.map((todo, index) => (
          <li class={todo.checked && "completed"} key={index}>
            <div class="view">
              <input
                class="toggle"
                type="checkbox"
                checked={todo.checked}
                onChange={(e) =>
                  setFiltered([
                    ...filtered.slice(0, index),
                    { value: todo.value, checked: !todo.checked },
                    ...filtered.slice(index + 1),
                  ])
                }
              />
              <label>{todo.value}</label>
              <button
                class="destroy"
                onClick={() =>
                  setFiltered([...filtered.filter((item, i) => i !== index)])
                }
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Main;
