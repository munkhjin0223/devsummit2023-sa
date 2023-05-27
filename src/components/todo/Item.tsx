'use client';

import { editTodo, removeTodo } from '@/app/actions/todo';
import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  todo: Todo;
};

export default function Item({ todo }: Props) {
  const router = useRouter();

  const [completed, setCompleted] = useState(todo.completed);

  function onClickCompleted() {
    setCompleted(!completed);

    editTodo(todo.id, !completed);
  }

  function onClickDelete() {
    removeTodo(todo.id);

    router.refresh();
  }

  return (
    <li
      key={todo.id}
      className={`flex border rounded-md border-gray-200 mb-3 justify-between p-3${completed ? ' text-underline' : ''}`}
    >
      <div className="text-xl ">
        <input id={todo.id} type="checkbox" checked={completed} onChange={() => onClickCompleted()} />
        <label className="pl-2 text-uppercase">{todo.text}</label>
      </div>
      <button
        className="group rounded-2xl h-8 w-36 bg-red-500 font-bold text-md text-white relative overflow-hidden"
        onClick={() => onClickDelete()}
      >
        Delete
      </button>
    </li>
  );
}
