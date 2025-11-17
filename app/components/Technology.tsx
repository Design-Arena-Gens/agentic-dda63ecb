export default function Technology() {
  const technologies = [
    {
      title: "Advanced Composite Materials",
      description: "Utilizing carbon fiber and advanced alloys for superior strength-to-weight ratio"
    },
    {
      title: "AI-Powered Flight Systems",
      description: "Machine learning algorithms for enhanced safety and fuel optimization"
    },
    {
      title: "Green Propulsion",
      description: "Developing hybrid-electric and sustainable aviation fuel compatible engines"
    },
    {
      title: "Digital Twin Technology",
      description: "Real-time monitoring and predictive maintenance through virtual replicas"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cutting-Edge Technology
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Innovation at the heart of every aircraft we create
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary hover:border-accent transition"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{tech.title}</h3>
              <p className="text-gray-700">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 md:p-12 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">Innovation Pipeline</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            We invest heavily in R&D, partnering with leading aerospace research institutions
            and technology companies to bring tomorrow's aviation solutions to market today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 px-6 py-3 rounded-full">
              Research Partnerships
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-full">
              Testing Facilities
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-full">
              Simulation Labs
            </div>
            <div className="bg-white/20 px-6 py-3 rounded-full">
              Certification Testing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
