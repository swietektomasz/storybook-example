import React from "react";
import { TodoList } from "./components/todolist";

export default { title: "Todo list" };

const justThingsToDo = [
  {
    id: "1",
    title: "Eat breakfast",
    completed: false
  },
  {
    id: "2",
    title: "Consume second breakfast",
    completed: false
  },
  {
    id: "3",
    title: "Devour lunch",
    completed: false
  },
  {
    id: "4",
    title: "Ingest dinner",
    completed: false
  }
];

export const ListWithThingsToDo = () => <TodoList todos={justThingsToDo} />;

const justCompletedThings = [
  {
    id: "1",
    title: "Eat breakfast",
    completed: true
  },
  {
    id: "2",
    title: "Consume second breakfast",
    completed: true
  },
  {
    id: "3",
    title: "Devour lunch",
    completed: true
  },
  {
    id: "4",
    title: "Ingest dinner",
    completed: true
  }
];

export const ListWithThingsDone = () => (
  <TodoList todos={justCompletedThings} />
);

const someThingsDone = [
  {
    id: "1",
    title: "Eat breakfast",
    completed: true
  },
  {
    id: "2",
    title: "Consume second breakfast",
    completed: true
  },
  {
    id: "3",
    title: "Devour lunch",
    completed: false
  },
  {
    id: "4",
    title: "Ingest dinner",
    completed: false
  }
];

export const ListWithSomeThingsDone = () => <TodoList todos={someThingsDone} />;
