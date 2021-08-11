import React, { useState } from "react";

export const TodoItem = ({ item, onDoneUndone, onEditTodo, onDeleteTodo }) => {
  const [isEditOn, setIsEditOn] = useState(false);
  // sukurti editTitle state
  const [editTitle, setEditTitle] = useState(item.title);
  // sujungti ji su ivesties lauku
  function handleEditTitle(e) {
    setEditTitle(e.target.value);
  }
  function sendTitle() {
    if (isEditOn) onEditTodo(item.id, editTitle);
    setIsEditOn(!isEditOn);
  }

  // salyginai rodyti input arba span
  // sukurti handleEditTodo App.jsx kuri kol kas iskonsolina id ir title
  // ivygdyti handleEditTodo esancia App.jsx

  // pasidaryti veikianti delete ikonele fa fa-trash
  // aprasyti visa delete funkcionaluma
  return (
    <li className="cur-point">
      {!isEditOn ? (
        <span
          onClick={() => onDoneUndone(item.id)}
          className={item.done ? "item-done" : ""}
        >
          {item.title}
        </span>
      ) : (
        <input type="text" value={editTitle} onChange={handleEditTitle} />
      )}
      <i onClick={sendTitle} className="fa fa-pencil"></i>
      <i
        onClick={() => onDeleteTodo(item.id)}
        style={{ color: "red" }}
        className="fa fa-trash"
      ></i>
    </li>
  );
};
