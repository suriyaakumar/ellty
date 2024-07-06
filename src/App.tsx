import "./App.css";
import { useState } from "react";
import Checkbox from "./components/checkbox";
import Separator from "./components/separator";

export default function App() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Page 1", isChecked: false },
    { id: 2, label: "Page 2", isChecked: false },
    { id: 3, label: "Page 3", isChecked: false },
    { id: 4, label: "Page 4", isChecked: false },
    { id: 5, label: "Page 5", isChecked: false },
    { id: 6, label: "Page 6", isChecked: false },
  ]);
  
  /**
   * Updates the state of a checkbox based on its ID.
   *
   * @param {number} id - The ID of the checkbox to update.
   * @return {void} This function does not return anything.
   */
  const handleCheckboxChange = (id: number) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id
        ? { ...checkbox, isChecked: !checkbox.isChecked }
        : checkbox
    );
    setCheckboxes(updatedCheckboxes);
    setIsCheckedAll(updatedCheckboxes.every((checkbox) => checkbox.isChecked));
  };

  /**
   * Updates the state of all checkboxes and the main checkbox based on the current state of the main checkbox.
   *
   * @return {void} This function does not return anything.
   */
  const handleMainCheckboxChange = () => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      isChecked: !isCheckedAll,
    }));
    setCheckboxes(updatedCheckboxes);
    setIsCheckedAll(!isCheckedAll);
  };

  return (
    <div className="hug">
      <Checkbox
        name="All Pages"
        isChecked={isCheckedAll}
        onChange={handleMainCheckboxChange}
      />
      <Separator />
      <div className="container">
        {checkboxes.map((checkbox) => (
          <Checkbox
            key={checkbox.id}
            name={checkbox.label}
            isChecked={checkbox.isChecked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
        ))}
      </div>
      <Separator />
      <div className="footer">
        <button className="button">Done</button>
      </div>
    </div>
  );
}
