/** @format */

export default function TotalBill({ bill, tip, sum }) {
  return (
    <div className="total-bill">
      <p className="total-bill__text">
        You pay ${sum} (${bill} + ${tip} tip)
      </p>
    </div>
  );
}
