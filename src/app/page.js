
import Link from "next/link";

export default function Home() {
  const modelos = [1, 2, 3, 4, 5, 6];
  return (
       <div className="bg-gray-50 text-gray-800 font-sans flex flex-col items-center justify-center min-h-screen p-4 sm:p-8">
      <main className="flex flex-col items-center justify-center text-center gap-12 w-full max-w-4xl">
        {/* Encabezado limpio */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
            Propuestas de Landing Page, Lexfer Ramirez - Leonardo Yepez
          </h1>
          <p className="text-gray-500 text-lg">Haz clic en una opción para ver la demostración.</p>
        </div>

        {/* Contenedor de los enlaces tipo "píldora" o botón */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {modelos.map((modelo) => (
            <Link
              key={modelo}
              href={`/${modelo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-gray-200 rounded-full bg-white text-lg font-medium text-gray-700
                         shadow-sm hover:shadow-lg hover:border-indigo-500 hover:text-indigo-600
                         transition-all duration-300 transform hover:scale-105"
            >
              Modelo {modelo}
            </Link>
          ))}
        </div>
      </main>

    </div>
  );
}
