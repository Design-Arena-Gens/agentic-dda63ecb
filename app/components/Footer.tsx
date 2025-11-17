export default function Footer() {
  return (
    <footer className="gradient-bg text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Aero</span>Flight
            </h3>
            <p className="text-gray-200">
              Pioneering the future of aviation with innovative aircraft manufacturing.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-200 hover:text-white transition">About Us</a></li>
              <li><a href="#services" className="text-gray-200 hover:text-white transition">Services</a></li>
              <li><a href="#fleet" className="text-gray-200 hover:text-white transition">Our Fleet</a></li>
              <li><a href="#technology" className="text-gray-200 hover:text-white transition">Technology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-200 hover:text-white transition">News & Updates</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Careers</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Investors</a></li>
              <li><a href="#" className="text-gray-200 hover:text-white transition">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-accent transition">📘</a>
              <a href="#" className="hover:text-accent transition">🐦</a>
              <a href="#" className="hover:text-accent transition">💼</a>
              <a href="#" className="hover:text-accent transition">📸</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-gray-200">
          <p>&copy; 2025 AeroFlight Industries. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a> |
            <a href="#" className="hover:text-white transition ml-2">Terms of Service</a> |
            <a href="#" className="hover:text-white transition ml-2">Cookie Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
