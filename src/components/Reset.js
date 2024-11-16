/** @format */
export default function Reset({
  bill,
  setBill,
  onSetSatisfaction1,
  onSetSatisfaction2,
}) {
  function handleReset() {
    setBill("");
    onSetSatisfaction1(0);
    onSetSatisfaction2(0);
  }

  return (
    <button onClick={handleReset} className="btn">
      Reset
    </button>
  );
}
