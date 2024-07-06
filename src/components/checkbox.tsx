import "../App.css";

export default function Checkbox({ name }: { name: string }) {
  return (
    <div className="block">
      <span>{name}</span>
      <input id={name} type="checkbox" />
      <label htmlFor={name}></label>
    </div>
  );
}
