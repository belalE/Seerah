import React from "react";

const hadith = (props) => {
  return (
    <div className="bg-yellow-100 rounded">
      <h1 className="text-3xl font-bold underline">Hadith</h1>
      <p>{props.arabic}</p>
      <p>{props.english}</p>
      <p>
        <a href={props.link}>{props.reference}</a>
      </p>
    </div>
  );
};

export default hadith;
