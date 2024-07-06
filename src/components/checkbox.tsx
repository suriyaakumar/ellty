import "../App.css";

export default function Checkbox({ name, isChecked, onChange }: { name: string; isChecked: boolean; onChange: () => void }) {
  return (
    <div className="block">
      <span>{name}</span>
      <input id={name} checked={isChecked} onChange={onChange} type="checkbox" />
      <label htmlFor={name}></label>
    </div>
  );
}
