/** @format */

import { options } from "../data/SatisfactionData";

export default function Satisfaction({ children }) {
  return (
    <div className="satisfaction">
      <p className="satisfaction__question">{children}</p>
      <select className="satisfaction__select">
        {options.map((option, i) => (
          <option key={i} className="satisfaction__option">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
