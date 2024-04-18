import { useState } from "react";
import "./mainPage.css";

export default function MainPage({
  onStartFunction,
}: {
  onStartFunction: () => void;
}) {
  const [inputValue, setInputValue] = useState<string>("");
  const [hovered, setHovered] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="container">
      <p>What is the name of your team? 🧐 </p>
      <input value={inputValue} onChange={handleChange} />

      <button
        className={`${inputValue ? "button-enabled" : "button-animate"} ${
          !inputValue && "button-disabled"
        }`}
        onMouseEnter={() => !hovered && setHovered(true)}
        onMouseLeave={() => setHovered(true)}
        disabled={!inputValue}
        onClick={onStartFunction}
      >
        Submit
      </button>
      {!inputValue && hovered && (
        <div className="tooltip_visible">
          Please enter a team name to proceed.
        </div>
      )}
    </div>
  );
}
