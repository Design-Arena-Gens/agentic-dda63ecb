export default function Services() {
  const services = [
    {
      icon: "✈️",
      title: "Aircraft Design",
      description: "Custom aircraft design tailored to specific operational requirements and market demands"
    },
    {
      icon: "🏭",
      title: "Manufacturing",
      description: "State-of-the-art manufacturing facilities utilizing advanced composite materials and automation"
    },
    {
      icon: "🔧",
      title: "Maintenance Solutions",
      description: "Comprehensive maintenance, repair, and overhaul services for optimal fleet performance"
    },
    {
      icon: "📊",
      title: "Engineering Consulting",
      description: "Expert aerospace engineering consultation for aircraft modification and optimization"
    },
    {
      icon: "🛡️",
      title: "Safety Certification",
      description: "Full regulatory compliance support and safety certification assistance"
    },
    {
      icon: "🌱",
      title: "Sustainable Aviation",
      description: "Development of eco-friendly aircraft with reduced emissions and fuel efficiency"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive solutions for every stage of aircraft lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
