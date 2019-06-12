import React, { useState, useEffect, useRef } from "react";
import { InputEditInPlace, TextAreaEditInPlace } from "./styles";

export const TextArea = ({ value, onChangeValue, viewAs }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const edit = () => setIsEditing(true);
  const done = () => {
    onChangeValue(inputRef.current.value);
    setIsEditing(false);
  };

  function handlerText(e) {
    onChangeValue(e.target.value);
  }

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  if (isEditing) {
    return (
      <TextAreaEditInPlace onBlur={done} ref={inputRef} onChange={handlerText}>
        {value}
      </TextAreaEditInPlace>
    );
  }
  return React.createElement(viewAs || "div", {
    onClick: edit,
    children: value,
    className: "edit-in-place"
  });
};

export const Input = ({ value, onChangeValue, viewAs }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const edit = () => setIsEditing(true);
  const done = () => {
    onChangeValue(inputRef.current.value);
    setIsEditing(false);
  };

  function handlerText(e) {
    onChangeValue(e.target.value);
  }

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  if (isEditing) {
    return (
      <InputEditInPlace
        onBlur={done}
        ref={inputRef}
        defaultValue={value}
        onChange={handlerText}
      />
    );
  }
  return React.createElement(viewAs || "div", {
    onClick: edit,
    children: value,
    className: "edit-in-place"
  });
};

export default Input;
