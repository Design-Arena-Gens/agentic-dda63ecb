export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About AeroFlight Industries
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            As a new entrant in the aviation manufacturing industry, AeroFlight Industries combines
            cutting-edge technology with decades of collective expertise to deliver aircraft that set
            new standards in safety, efficiency, and performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-xl text-white text-center transform hover:scale-105 transition">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p>To revolutionize air travel through innovative design and sustainable manufacturing practices</p>
          </div>

          <div className="bg-gradient-to-br from-secondary to-primary p-8 rounded-xl text-white text-center transform hover:scale-105 transition">
            <div className="text-5xl mb-4">🔭</div>
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p>Becoming a global leader in next-generation aircraft manufacturing by 2030</p>
          </div>

          <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-xl text-white text-center transform hover:scale-105 transition">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="text-2xl font-bold mb-3">Our Values</h3>
            <p>Safety first, innovation always, and commitment to environmental sustainability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
