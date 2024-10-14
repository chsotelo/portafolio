export default async function RootLoaging() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mb-4 animate-fade-in-down">
          Bienvenido a mi portafolio
        </h1>
        <p className=" mb-8 animate-fade-in">
          ¡Un momento! Estamos cargando algo increíble para ti.
        </p>
        <div className="flex justify-center space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-orange-600 rounded-full animate-bounce`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
