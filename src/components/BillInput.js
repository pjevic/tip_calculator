/** @format */

export default function BillInput({ bill, onSetBill }) {
  return (
    <div className="bill-input">
      <label for="bill-input" className="bill-input__question">
        How much was the bill?
      </label>
      <input
        id="bill-input"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
        type="number"
        className="bill-input__input"
      />
    </div>
  );
}
