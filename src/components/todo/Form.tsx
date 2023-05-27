"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { addTodo } from "@/app/actions/todo";

const TodoForm = () => {
  const router = useRouter();

  const [text, setText] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!text) return;

    addTodo(text);
    try {
      setText("");

      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text-xl color-black"
        placeholder="Add Todo..."
      />
    </form>
  );
};

export default TodoForm;
