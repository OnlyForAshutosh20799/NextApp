const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-saffron-500 to-golden-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">MC</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">Manish Choudhary</h2>
                <p className="text-golden-300 text-sm">Vedic Astrology Expert</p>
              </div>
            </div>
            <p className="text-gray-300 max-w-md">
              Providing authentic Vedic astrology guidance with 7+ years of experience. 
              Your trusted partner in navigating life's journey through cosmic wisdom.
            </p>
          </div>


          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-golden-300">Connect</h3>
            <div className="space-y-2 text-gray-300">
              <p>📱 +91 9876543210</p>
              <p>✉️ consult@manishastrology.com</p>
              <p>🕒 9:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Manish Choudhary Astrology. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;