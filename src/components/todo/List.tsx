"use client";

import { Todo } from "@prisma/client";
import React from "react";
import Item from "./Item";

type Props = {
  todos: Todo[];
};

const List = ({ todos }: Props) => {
  return (
    <ul className="py-1">
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo}></Item>
      ))}
    </ul>
  );
};

export default List;
