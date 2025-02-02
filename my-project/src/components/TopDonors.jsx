export default function TopDonors({ donors }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Top Donors</h2>
      <ul>
        {donors.map((donor, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b last:border-b-0"
          >
            <span className="font-medium">{donor.name}</span>
            <span className="text-blue-600 font-semibold">${donor.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
