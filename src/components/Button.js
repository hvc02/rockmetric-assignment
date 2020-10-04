import React from "react";

export const Button = (props) => {
  const className = `button-${props.type}`;
  return (
    <div>
      <button
        className={className}
        onClick={props.handleClick}
        value={props.value}
      >
        {props.label}
      </button>
    </div>
  );
};
