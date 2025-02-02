import { useState, useEffect } from "react";
import DonationCounter from "./components/DonationCounter";
import DonationForm from "./components/DonationForm";
import TopDonors from "./components/TopDonors";
import Fuego from "./assets/Fuego.jpeg"; // Imagen que ahora se usará solo en el hero section
import Logo from "./assets/Logo.jpeg"; // Asegúrate de tener un archivo de logo en la carpeta assets

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
    <div className="select-none min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Fuego})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col h-full items-center justify-center text-center">
          {/* Logo y Frase Inspiradora */}
          <img src={Logo} alt="Logo" className="w-32 h-32 mb-4" />
          <h1 className="text-white text-4xl font-bold mb-8">
            ¡La Patagonia necesita tu ayuda!
          </h1>

          {/* Donation Counter */}
          <DonationCounter total={totalDonations} />
        </div>

        {/* Corte diagonal del fondo */}
        <div
          className="absolute bottom-0 left-0 w-full h-32 bg-[#244446]"
          style={{
            clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0% 100%)",
          }}
        ></div>
      </section>

      {/* Sección de Donación y Top Donadores */}
      <div className="relative -mt-16 z-20">
        <div className="container mx-auto px-4 flex flex-col items-center">
          {/* Make a Donation Form */}
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg mb-8">
            <DonationForm onDonate={handleDonation} />
          </div>

          {/* Top Donors */}
          <div className="w-full max-w-md">
            <TopDonors donors={topDonors} />
          </div>
        </div>
      </div>

      {/* Resto de la aplicación */}
      <div className="min-h-screen flex flex-col bg-[#244446]">
        <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
          <div className="text-center"></div>
        </main>
      </div>
    </div>
  );
}
