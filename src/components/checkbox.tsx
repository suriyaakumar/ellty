import "../App.css";

export default function Checkbox({ name }: { name: string }) {
  return (
    <label className="label">
      <span>{name}</span>
      <input type="checkbox" />
    </label>
  );
}
