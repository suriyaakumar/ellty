import "./App.css";
import Checkbox from "./components/checkbox";
import Separator from "./components/separator";

export default function App() {
  return (
    <div className="hug">
      <Checkbox name="All Pages" />
      <Separator />
      <div className="container">
        <Checkbox name="Page 1" />
        <Checkbox name="Page 2" />
        <Checkbox name="Page 3" />
        <Checkbox name="Page 4" />
        <Checkbox name="Page 5" />
        <Checkbox name="Page 6" />
      </div>
      <Separator />
      <div className="footer">
        <button className="button">Done</button>
      </div>
    </div>
  );
}
