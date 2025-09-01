
"use client";
import React, { useState, useMemo } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

// --- Mock Data for Allies ---
const allies = [
  {
    id: 1,
    name: "Clínica Santa Sofía",
    specialty: "Clinicas",
    address: "Av. Principal de Santa Sofía, Caracas",
    phone: "555-5678",
    position: { lat: 10.4783, lng: -66.8578 }, // Caracas
  },
  {
    id: 2,
    name: "Farmatodo",
    specialty: "Farmacias",
    address: "Av. Libertador, Chacao, Caracas",
    phone: "555-1234",
    position: { lat: 10.4991, lng: -66.8960 }, // Caracas
  },
  {
    id: 3,
    name: "Funeraria Vallés",
    specialty: "Funerarias",
    address: "Av. Los Jabillos, Caracas",
    phone: "555-9012",
    position: { lat: 10.4952, lng: -66.8839 }, // Caracas
  },
  {
    id: 4,
    name: "Taller Auto-Rápido",
    specialty: "Talleres",
    address: "Calle Madrid, Las Mercedes, Caracas",
    phone: "555-3456",
    position: { lat: 10.4771, lng: -66.8615 }, // Caracas
  },
  {
    id: 5,
    name: "Laboratorio Clínico La Trinidad",
    specialty: "Laboratorios",
    address: "Av. Intercomunal, La Trinidad, Caracas",
    phone: "555-7890",
    position: { lat: 10.4255, lng: -66.8782 }, // Caracas
  },
  {
    id: 6,
    name: "Hospital de Clínicas Caracas",
    specialty: "Clinicas",
    address: "Av. Panteón, San Bernardino, Caracas",
    phone: "555-1111",
    position: { lat: 10.5084, lng: -66.9094 }, // Caracas
  },
  {
    id: 7,
    name: "Centro Médico Docente La Trinidad",
    specialty: "Clinicas",
    address: "Av. Intercomunal La Trinidad, Caracas",
    phone: "555-2222",
    position: { lat: 10.4255, lng: -66.8782 }, // Caracas
  },
  {
    id: 8,
    name: "Farmacia Locatel",
    specialty: "Farmacias",
    address: "C.C. Sambil, Chacao, Caracas",
    phone: "555-3333",
    position: { lat: 10.5002, lng: -66.8531 }, // Caracas
  },
  {
    id: 9,
    name: "Farmahorro",
    specialty: "Farmacias",
    address: "Av. Francisco de Miranda, Altamira, Caracas",
    phone: "555-4444",
    position: { lat: 10.4998, lng: -66.8443 }, // Caracas
  },
  {
    id: 10,
    name: "Funeraria Monumental",
    specialty: "Funerarias",
    address: "Av. Cementerio, Caracas",
    phone: "555-5555",
    position: { lat: 10.4851, lng: -66.9145 }, // Caracas
  },
  {
    id: 11,
    name: "Servicios Funerarios La Equitativa",
    specialty: "Funerarias",
    address: "Av. Victoria, Caracas",
    phone: "555-6666",
    position: { lat: 10.4911, lng: -66.9015 }, // Caracas
  },
  {
    id: 12,
    name: "Taller Mecánico Pérez",
    specialty: "Talleres",
    address: "Av. San Martín, Caracas",
    phone: "555-7777",
    position: { lat: 10.5008, lng: -66.9331 }, // Caracas
  },
  {
    id: 13,
    name: "Firestone",
    specialty: "Talleres",
    address: "Av. Roosevelt, Caracas",
    phone: "555-8888",
    position: { lat: 10.4815, lng: -66.9158 }, // Caracas
  },
  {
    id: 14,
    name: "Laboratorio Clínico Express",
    specialty: "Laboratorios",
    address: "C.C. El Recreo, Bello Monte, Caracas",
    phone: "555-9999",
    position: { lat: 10.4945, lng: -66.8823 }, // Caracas
  },
  {
    id: 15,
    name: "Laboratorio Behrens",
    specialty: "Laboratorios",
    address: "Av. Andrés Bello, Caracas",
    phone: "555-0000",
    position: { lat: 10.5048, lng: -66.891 }, // Caracas
  },
];

const specialties = [
  "Todos",
  "Clinicas",
  "Farmacias",
  "Funerarias",
  "Talleres",
  "Laboratorios",
];

// --- Google Maps Styles ---
const mapContainerStyle = {
  height: "400px",
  width: "100%",
  borderRadius: "1rem",
};

const center = {
  lat: 10.4806,
  lng: -66.9036,
};

// --- Component ---
const AlliesSection = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todos");
  const [selectedAlly, setSelectedAlly] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAllies = useMemo(() => {
    let filtered = allies;

    if (selectedSpecialty !== "Todos") {
      filtered = filtered.filter((ally) => ally.specialty === selectedSpecialty);
    }

    if (searchTerm) {
      filtered = filtered.filter((ally) =>
        ally.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [selectedSpecialty, searchTerm]);

  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-[2.8rem] font-bold text-center text-[#2F9CE0] mb-12 leading-[1.2]">
          Nuestra Red de Aliados
        </h2>

        {/* --- Filters --- */}
        <div className="flex flex-col items-center gap-4 mb-12">
            <input
                type="text"
                placeholder="Buscar por nombre"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md p-2 border border-gray-300 rounded-full"
            />
            <div className="flex justify-center flex-wrap gap-4">
              {specialties.map((specialty) => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`py-2 px-6 rounded-full font-semibold normal-case transition-all duration-300 mt-4 ${
                    selectedSpecialty === specialty
                      ? "bg-[#2F9CE0] text-white shadow-md"
                      : "bg-transparent text-[#2FD4E0] border border-[#2FD4E0] hover:bg-[#2FD4E0] hover:text-white hover:shadow-md"
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
        </div>

        {/* --- Allies List and Map --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* --- Allies List --- */}
          <div className="md:col-span-1 h-[400px] overflow-y-auto pr-4">
            <ul className="space-y-4 m-2">
              {filteredAllies.map((ally) => (
                <li
                    key={ally.id}
                    onClick={() => setSelectedAlly(ally)}
                    className={`p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow ${
                      selectedAlly?.id === ally.id ? "border-2 border-[#2F9CE0]" : ""
                    }`}>
                    <h3 className="font-bold text-lg text-[#2F9CE0]">
                      {ally.name}
                    </h3>
                    <p className="text-[#2F9CE0]">{ally.specialty}</p>
                    <p className="text-sm text-[#666]">{ally.address}</p>
                  </li>
              ))}
            </ul>
          </div>

          {/* --- Google Map --- */}
          <div className="md:col-span-2">
            {googleMapsApiKey ? (
              <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={
                    selectedAlly
                      ? selectedAlly.position
                      : center
                  }
                  zoom={selectedAlly ? 15 : 12}
                >
                  {filteredAllies.map((ally) => (
                    <Marker
                      key={ally.id}
                      position={ally.position}
                      onClick={() => setSelectedAlly(ally)}
                    />
                  ))}

                  {selectedAlly && (
                    <InfoWindow
                      position={selectedAlly.position}
                      onCloseClick={() => {
                        setSelectedAlly(null);
                      }}
                      options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
                    >
                      <div>
                        <h3 className="font-bold">{selectedAlly.name}</h3>
                        <p>{selectedAlly.specialty}</p>
                        <p>{selectedAlly.address}</p>
                      </div>
                    </InfoWindow>
                  )}
                </GoogleMap>
              </LoadScript>
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Google Map cannot be displayed. Please provide an API key.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlliesSection;
