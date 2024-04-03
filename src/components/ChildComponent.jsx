import React, { useEffect, useState } from "react";

const ChildComponent = ({ inputType, inputMode }) => {
  const [userinput, setUserinput] = useState("");
  const [savedinput, setsavedinput] = useState("");

  let input_type;

  input_type = inputType;

  if (inputType === "Currency") {
    input_type = "number";
  }

  useEffect(() => {
    if (inputMode === "edit") {
      setUserinput(savedinput);
    }

    if(inputType === "checkbox" || inputType === "radio"){
        setUserinput("option 1")
    }

  }, [inputMode, savedinput,inputType]);

  const saveInput = (e) => {
    e.preventDefault();
    setsavedinput(userinput);
    setUserinput("");
  };

  if (!savedinput && inputMode === "edit") {
    return <div>No valid input to EDIT!!</div>;
  }

  return (
    <div>
      <label htmlFor="user-input"></label>
      <input
        type={input_type}
        id="user-input"
        value={userinput}
        name= "option"
        onChange={(e) => setUserinput(e.target.value)}
        disabled={inputMode === "disable" ? true : false}
      />
      {(inputType === "checkbox" || inputType === "radio") && (
        <input
          type={input_type}
          id="user-input"
          value = "option 2"
          name= "option"
          disabled={inputMode === "disable" ? true : false}
        />
      )}
      <input type="button" value="Submit" onClick={(e) => saveInput(e)} />
    </div>
  );
};

export default ChildComponent;
