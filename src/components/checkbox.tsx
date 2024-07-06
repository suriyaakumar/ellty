import "../App.css";

/**
 * Renders a checkbox component with the given name, checked state, and onChange handler.
 *
 * @param {string} name - The name of the checkbox.
 * @param {boolean} isChecked - The checked state of the checkbox.
 * @param {() => void} onChange - The handler function to be called when the checkbox is toggled.
 * @return {JSX.Element} The rendered checkbox component.
 */
export default function Checkbox({ name, isChecked, onChange }: { name: string; isChecked: boolean; onChange: () => void }) {
  return (
    <div className="block">
      <span>{name}</span>
      <input id={name} checked={isChecked} onChange={onChange} type="checkbox" />
      <label htmlFor={name}></label>
    </div>
  );
}
