export default function PetSections() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}

      {/* Pets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-[300px] gap-1">
        {/* Cats Section */}
        <div className="relative group cursor-pointer">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/bg-g.jpg')`
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          </div>
          <div className="relative h-full flex items-center justify-center flex-col gap-4">
            <h2 className="text-4xl text-white font-medium">Gatos</h2>
            <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">
              Ver más
            </button>
          </div>
        </div>

        {/* Dogs Section */}
        <div className="relative group cursor-pointer">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/slider-2.jpg')`
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          </div>
          <div className="relative h-full flex flex-col items-center justify-center gap-4">
            <h2 className="text-4xl text-white font-medium">Perros</h2>
            <button className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors">
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

