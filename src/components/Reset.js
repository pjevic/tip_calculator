/** @format */
export default function Reset({
  bill,
  setBill,
  setSatisfaction1,
  setSatisfaction2,
}) {
  function handleReset() {
    setBill("");
    setSatisfaction1(0);
    setSatisfaction2(0);
  }

  return (
    bill > 0 && (
      <button onClick={handleReset} className="btn">
        Reset
      </button>
    )
  );
}
