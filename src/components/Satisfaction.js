/** @format */

import { options } from "../data/SatisfactionData";

export default function Satisfaction({
  children,
  id,
  satisfaction,
  onSetSatisfaction,
}) {
  return (
    <div className="satisfaction">
      <label for={id} className="satisfaction__question">
        {children}
      </label>
      <select
        id={id}
        value={satisfaction}
        onChange={(e) => onSetSatisfaction(Number(e.target.value))}
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
