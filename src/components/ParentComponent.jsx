import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [selectinput, setSelectinput] = useState("");
  const [selectmode, setSelectmode] = useState("");
  const [extraOptions, setExtraOptions] = useState({});

  return (
    <div>
      <div>
        <label htmlFor="select-input">Select the type of Input Required</label>
        <select
          name="select-input"
          id="select-input"
          value={selectinput}
          onChange={(e) => setSelectinput(e.target.value)}
        >
          <option value="">select input</option>
          <option value="radio">Radio</option>
          <option value="checkbox">Checkbox</option>
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="Currency">Currency</option>
          <option value="password">Password</option>
        </select>
        <label htmlFor="select-mode">Select the mode of Input</label>
        <select
          name="select-input"
          id="select-mode"
          value={selectmode}
          onChange={(e) => setSelectmode(e.target.value)}
        >
          <option value="">select mode</option>
          <option value="create">Create</option>
          <option value="edit">Edit</option>
          <option value="disable">Disable</option>
        </select>
        <div>
          <label htmlFor="extra-options">Select the mode of Input</label>
          <input type="checkbox" name="" id="" />
        </div>
      </div>
      {selectinput && selectmode && (
        <ChildComponent inputType={selectinput} inputMode={selectmode} />
      )}
    </div>
  );
};

export default ParentComponent;
