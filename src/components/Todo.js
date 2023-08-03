import React, { useState } from "react";
import "./Todo.css";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TiArrowBackOutline } from "react-icons/ti";

const Todo = ({ todo, deleteTodo, editTodo }) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState("");

  const handleUpdateText = (e) => {
    editTodo(todo.id, input);
    setInput("");
    setEdit(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const EditHeader = () => {
    return (
      <>
        <div>~ Editing ~</div>
      </>
    );
  };
  const NormalHeader = () => {
    return (
      <>
        <div>~ Normal ~</div>
      </>
    );
  };

  const CommonUI = () => {
    return (
      <div>
        {/* Header */}
        <div>{edit ? EditHeader() : NormalHeader()}</div>

        {/* Meat */}
        <div className="container-common-ui">
          {/* Display */}
          <div className={edit?"children-display-active": "children-display"}>
            {edit ? (
              <input
                className="children-display-input"
                placeholder="Input something"
                onChange={handleInputChange}
                value={input}
              />
            ) : (
              <div> {todo.text} </div>
            )}
          </div>
          {/* Buttons */}
          <div className="buttons">
            {edit ? (
              <TiArrowBackOutline size={32} onClick={handleUpdateText}></TiArrowBackOutline>
            ) : (
              <TiEdit size={32}
                onClick={() => {
                  setEdit(true);
                  setInput(todo.text);
                }}
              ></TiEdit>
            )}
            <RiCloseCircleLine size={32} onClick={() => deleteTodo(todo.id)}>
              Delete
            </RiCloseCircleLine>
          </div>
        </div>

        {/* Spacing */}
        <div className="container-common-ui-footer">

        </div>
      </div>
    );
  };

  return CommonUI();
};

export default Todo;
