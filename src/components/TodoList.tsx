import React, { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import "./TodoList.css";

const TodoList: FC = () => {
  const { page, error, loading, todos, limit } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id}.{todo.title}
        </div>
      ))}
      <div className="allPages">
        {pages.map((p) => (
          <div  onClick={() => setTodoPage(p)} className={p === page ? "activePage" : "page"} key={p}>
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
