/** @format */

export default function BillInput({ bill, setBill }) {
  return (
    <div className="bill-input">
      <p className="bill-input__question">How much was the bill?</p>
      <input
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        type="number"
        className="bill-input__input"
      />
    </div>
  );
}
