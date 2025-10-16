import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

function addTodo(text) {
  const input = screen.getByLabelText(/todo-input/i);
  fireEvent.change(input, { target: { value: text } });
  fireEvent.submit(screen.getByRole("form", { name: /add-todo-form/i }));
}

test("renders initial todos", () => {
  render(<App />);
  expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  expect(screen.getByText(/write tests/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<App />);
  addTodo("Buy milk");
  expect(screen.getByText(/buy milk/i)).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<App />);
  const todo = screen.getByText(/learn react/i);
  expect(todo).toHaveStyle({ textDecoration: "none" });
  fireEvent.click(todo);
  expect(todo).toHaveStyle({ textDecoration: "line-through" });
});

test("deletes a todo", () => {
  render(<App />);
  const todo = screen.getByText(/write tests/i);
  const li = todo.closest("li");
  const del = li.querySelector("button");
  fireEvent.click(del);
  expect(screen.queryByText(/write tests/i)).not.toBeInTheDocument();
});
