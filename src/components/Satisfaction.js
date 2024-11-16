/** @format */

import { options } from "../data/SatisfactionData";

export default function Satisfaction({
  children,
  satisfaction,
  setSatisfaction,
}) {
  return (
    <div className="satisfaction">
      <p className="satisfaction__question">{children}</p>
      <select
        value={satisfaction}
        onChange={(e) => setSatisfaction(Number(e.target.value))}
        className="satisfaction__select"
      >
        {options.map((option, i) => (
          <option key={i} value={option.value} className="satisfaction__option">
            {option.level}
          </option>
        ))}
      </select>
    </div>
  );
}
