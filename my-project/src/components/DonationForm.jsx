import { useState } from "react";

export default function DonationForm({ onDonate }) {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      const donorName = isAnonymous ? "Anonymous" : name;
      onDonate(Number(amount), donorName);
      setAmount("");
      setName("");
      setIsAnonymous(false);
    }
  };

  // Función para manejar la selección de montos comunes
  const handleCommonAmount = (commonAmount) => {
    setAmount(commonAmount);
  };

  return (
    <div className="select-none bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            disabled={isAnonymous}
            required={!isAnonymous}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Monto ($)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
            min="1"
          />
        </div>
        {/* Botones de montos comunes */}
        <div className="mb-4 flex gap-2">
          <button
            type="button"
            onClick={() => handleCommonAmount(1000)}
            className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
          >
            $1.000
          </button>
          <button
            type="button"
            onClick={() => handleCommonAmount(5000)}
            className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
          >
            $5.000
          </button>
          <button
            type="button"
            onClick={() => handleCommonAmount(10000)}
            className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-200"
          >
            $10.000
          </button>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <span className="ml-2 text-sm text-gray-700">
              Donar Anonimamente
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Donar
        </button>
      </form>
    </div>
  );
}
