/** @format */

export default function TotalBill({ bill, tip, sum }) {
  return (
    bill > 0 && (
      <div className="total-bill">
        <p className="total-bill__text">
          You pay ${sum} (${bill} + ${tip} tip)
        </p>
      </div>
    )
  );
}
