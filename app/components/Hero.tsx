export default function Hero() {
  return (
    <section id="home" className="pt-20 gradient-bg text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Pioneering the Future of Aviation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            From concept to flight, we craft aircraft that redefine excellence in aerospace engineering
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-accent hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105 text-center"
            >
              Get in Touch
            </a>
            <a
              href="#fleet"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition text-center"
            >
              Explore Our Fleet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
