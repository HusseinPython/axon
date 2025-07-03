
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Axon Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-600 max-w-md">
              A peer-to-peer marketplace where small businesses find custom AI automation tools made by developers.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-2 md:items-center">
            <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link to="#pricing" className="text-gray-600 hover:text-black transition-colors">
              Pricing
            </Link>
            <Link to="/signup" className="text-gray-600 hover:text-black transition-colors">
              Join Our Waiting List
            </Link>
          </div>

          {/* Social and Copyright */}
          <div className="flex flex-col items-start md:items-end space-y-4">
            <a href="#" className="text-gray-400 hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <p className="text-gray-600 text-sm">
              © 2024 Axon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
