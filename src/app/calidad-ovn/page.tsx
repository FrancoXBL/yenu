export default function CalidadOVN() {
  return (
    <div className="min-h-screen relative bg-[url('/bg-ovn.jpg')] bg-cover bg-center">
    <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text readability */}
    <div className="relative z-10 container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur-sm rounded-lg p-8 shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-5xl font-bold text-white my-auto text-black/50">Calidad OVN</h1>
          <img 
            src="/ovn.png" 
            alt="OVN Logo" 
            className="w-42 h-24"
          />
        </div>

        {/* Main Content */}
        <div className=" backdrop-blur-sm rounded-lg p-8 shadow-xl bg-cover">
          <h2 className="text-2xl font-bold text-zinc-900 mb-6">
            Calidad Argentina Certificada Internacionalmente
          </h2>

          <div className="space-y-6 text-zinc-700">
            <p className="text-lg">
              Yenu es la respuesta profesional en alimentación para mascotas, 
              desarrollada por GARAY S.R.L. con más de treinta años de experiencia.
            </p>

            <div className="border-l-4 border-black pl-4 py-2">
              <p className="font-medium">
                Único alimento en Argentina con certificación internacional OVN 
                (Nutrición Vitamínica Óptima) otorgada por DSM, proveedor mundial 
                líder en vitaminas.
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-black mr-3" />
                <span>Estudios exhaustivos en caniles y laboratorios</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-black  mr-3" />
                <span>Altos estándares internacionales de calidad</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-black  mr-3" />
                <span>Suplementación vitamínica óptima</span>
              </li>
            </ul>

            <p className="text-xl font-semibold text-center mt-8">
              Diseñado especialmente para profesionales
            </p>
          </div>
        </div>

        {/* Argentina Flag Badge */}
        <div className="flex justify-center mt-8">
          <img 
            src="/cinta-arg.png" 
            alt="Producto Argentino" 
            className="h-40 w-80 mx-auto"
          />
        </div>
      </div>
    </div>
  </div>
  );
}