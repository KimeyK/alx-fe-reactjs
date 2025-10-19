import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

function addTodo(text) {
  const input = screen.getByLabelText(/todo-input/i);
  fireEvent.change(input, { target: { value: text } });
  // submit the form
  fireEvent.submit(screen.getByRole("form", { name: /add-todo-form/i }));
}

describe("TodoList", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByText(/write tests/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    addTodo("Buy milk");
    expect(screen.getByText(/buy milk/i)).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText(/learn react/i);
    expect(todo).toHaveStyle({ textDecoration: "none" });
    fireEvent.click(todo);
    expect(todo).toHaveStyle({ textDecoration: "line-through" });
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText(/write tests/i);
    const li = todo.closest("li");
    const delBtn = li.querySelector('button[aria-label^="delete-"]');
    fireEvent.click(delBtn);
    expect(screen.queryByText(/write tests/i)).not.toBeInTheDocument();
  });
});
