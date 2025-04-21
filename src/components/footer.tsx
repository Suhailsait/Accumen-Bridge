import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <span className="flex flex-col items-center md:items-start">
              <img
                src="/assets/images/ACCUMBRIDGE-LOGO.png"
                alt="Logo"
                className="w-12 h-12 mb-2"
              />
              <h3 className="text-xl font-bold mb-4">ACCUMENBRIDGE</h3>
            </span>
            <p className="text-earth-200 mb-6">
              Revolutionizing security with AI-powered smart surveillance
              solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
              >
                <Facebook size={20} />
              </Link>
              <Link
                to="/"
                className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
              >
                <Twitter size={20} />
              </Link>
              <Link
                to="/"
                className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                to="/"
                className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
              >
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#features"
                  className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/#applications"
                  className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
                >
                  Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/request-demo"
                  className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
                >
                  Request Demo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
                >
                  Retail Security
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
                >
                  Banking Protection
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
                >
                  Healthcare Safety
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
                >
                  Corporate Security
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-earth-300 hover:text-moss-400 transition-colors duration-300"
                >
                  Smart Building Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-moss-400 mr-3 mt-1" />
                <span className="text-earth-300">
                  123 AI Boulevard, Tech City, TC 10101
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-moss-400 mr-3" />
                <span className="text-earth-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-moss-400 mr-3" />
                <span className="text-earth-300">info@accumenbridge.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-earth-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-earth-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} accumenbridge. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/"
                className="text-earth-400 hover:text-moss-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-earth-400 hover:text-moss-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/"
                className="text-earth-400 hover:text-moss-400 text-sm transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
