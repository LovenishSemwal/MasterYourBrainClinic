import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/image/logo.png'; 
import { NavLink } from 'react-router-dom';

export default function ClinicNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/*  Logo Section */}
          <div className="flex items-center space-x-3">
            {/* Logo Image */}
            <img
              src={logo}
              alt="Clinic Logo"
              className="w-auto h-36  object-cover "
            />

            {/* Clinic Name */}
            <div className="hidden sm:block">
              {/* <h1 className="text-xl font-bold text-gray-800">HealthCare</h1> */}
              {/* <p className="text-xs text-teal-600">Clinic</p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <NavLink to="/aboutus" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <NavLink to="/ourdoctors" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
              Our Doctors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <NavLink to="/ourservices" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
              Our Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <NavLink to="/assessment" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
              Assessment
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

            <NavLink to="/contactus" className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300"></span>
            </NavLink>

          </div>

          {/* Phone Number - Desktop */}
          <div className="hidden lg:flex items-center space-x-3 bg-cyan-50 px-4 py-2 rounded-lg border border-teal-200">
            <div className="bg-teal-600 p-2 rounded-lg">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Call Us</p>
              <p className="text-sm font-semibold text-gray-800">+91 98765 43210</p>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <a href="tel:+919876543210" className="bg-teal-600 p-2 rounded-lg">
              <Phone className="w-5 h-5 text-white" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-100 border-t border-gray-200' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3 bg-gray-50">
          <NavLink to="/" className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>Home</NavLink>

          <NavLink to="/aboutus" className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>About Us</NavLink>

          <NavLink to="/ourdoctors" className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>Our Doctors</NavLink>

          <NavLink to="/ourservices" className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>Our Services</NavLink>

          <NavLink to="/assessment" className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>Assessment</NavLink>

          <NavLink to="/contactus" className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg font-medium transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact Us</NavLink>


          <div className="pt-3 pb-3 border-t border-gray-200">
            <div className="flex items-center space-x-3 px-4 py-3 bg-teal-50 rounded-lg">
              <Phone className="w-5 h-5 text-teal-600" />
              <div>
                <p className="text-xs text-gray-500">Call Us</p>
                <a href="tel:+919876543210" className="text-sm font-semibold text-gray-800">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
