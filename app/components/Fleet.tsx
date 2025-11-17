export default function Fleet() {
  const aircraft = [
    {
      name: "AF-100 Regional",
      type: "Regional Passenger Aircraft",
      capacity: "78-92 passengers",
      range: "2,500 km",
      features: ["Fuel efficient", "Low noise", "Advanced avionics"],
      status: "In Development"
    },
    {
      name: "AF-300 Medium",
      type: "Medium-Range Aircraft",
      capacity: "150-180 passengers",
      range: "5,500 km",
      features: ["Wide-body comfort", "Sustainable design", "Smart cabin"],
      status: "Design Phase"
    },
    {
      name: "AF-500 Long",
      type: "Long-Range Aircraft",
      capacity: "280-320 passengers",
      range: "12,000 km",
      features: ["Ultra-long range", "Premium efficiency", "Next-gen systems"],
      status: "Concept Phase"
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Aircraft Portfolio
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Innovative aircraft solutions for diverse aviation needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aircraft.map((plane, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <div className="bg-gradient-to-r from-primary to-secondary h-48 flex items-center justify-center text-white text-6xl">
                ✈️
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-primary">{plane.name}</h3>
                  <span className="bg-accent text-white text-xs px-3 py-1 rounded-full">
                    {plane.status}
                  </span>
                </div>
                <p className="text-gray-600 font-semibold mb-4">{plane.type}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">Capacity:</span>
                    <span>{plane.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">Range:</span>
                    <span>{plane.range}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {plane.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="text-secondary mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
