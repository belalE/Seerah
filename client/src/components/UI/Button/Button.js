import React from "react";

const Button = (props) => {
  const styles = {
    primary:
      "bg-green-700 hover:bg-green-900 text-white font-semibold py-1 px-3 my-1 mr-2 rounded",
    secondary:
      "bg-gray-500 hover:bg-gray-700 text-white font-semibold py-1 px-3 my-1 mr-2 rounded",
    tertiary:
      "bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-3 my-1 mr-2 rounded",
  };

  return (
    <button onClick={props.clicked} className={styles[props.styleChoice]}>
      {props.children}
    </button>
  );
};

export default Button;
