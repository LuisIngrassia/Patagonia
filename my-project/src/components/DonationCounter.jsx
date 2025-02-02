export default function DonationCounter({ total }) {
  return (
    <div className="select-none bg-transparent p-6 text-center">
      <h2 className="text-2xl font-semibold text-white mb-2">
        Donaciones Totales
      </h2>
      <p className="text-6xl font-bold text-white">${total.toLocaleString()}</p>
    </div>
  );
}
