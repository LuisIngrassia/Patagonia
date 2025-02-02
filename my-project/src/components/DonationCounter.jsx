export default function DonationCounter({ total }) {
  return (
    <div className="bg-transparent rounded-lg shadow-md p-6 text-center">
      <h2 className="text-2xl font-semibold mb-2">Total Donations</h2>
      <p className="text-4xl font-bold text-red-600">
        ${total.toLocaleString()}
      </p>
    </div>
  );
}
