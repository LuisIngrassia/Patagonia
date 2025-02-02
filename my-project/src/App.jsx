import { useState, useEffect } from "react";
import DonationCounter from "./components/DonationCounter";
import DonationForm from "./components/DonationForm";
import TopDonors from "./components/TopDonors";

export default function App() {
  const [totalDonations, setTotalDonations] = useState(0);
  const [topDonors, setTopDonors] = useState([]);

  useEffect(() => {
    setTotalDonations(5000);
    setTopDonors([
      { name: "John Doe", amount: 1000 },
      { name: "Jane Smith", amount: 750 },
      { name: "Bob Johnson", amount: 500 },
    ]);
  }, []);

  const handleDonation = (amount, name) => {
    setTotalDonations((prev) => prev + amount);
    setTopDonors((prev) => {
      const newDonors = [...prev, { name, amount }];
      return newDonors.sort((a, b) => b.amount - a.amount).slice(0, 5);
    });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('../assets/Fuego.jpeg')",
      }}
    >
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Patagonia</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <DonationCounter total={totalDonations} />
        <div className="mt-12 space-y-8">
          <DonationForm onDonate={handleDonation} />
          <TopDonors donors={topDonors} />
        </div>
      </main>
    </div>
  );
}
