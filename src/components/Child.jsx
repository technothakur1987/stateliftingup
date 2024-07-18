import React, { useState } from "react";

const Child = ({ handleSubmit }) => {
  console.log("child");

  const [value, setValue] = useState("");
  return (
    <form action="">
      <input
        type="text"
        placeholder="Enter some text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <br />
      <br />

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(value);
        }}
      >
        showValueonParent
      </button>
    </form>
  );
};

export default Child;
