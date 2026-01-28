import { Link } from 'react-router-dom'
import { Linkedin, ArrowRight, MapPin, Phone, Mail } from 'lucide-react'

import logo from "../assets/header-logo.png"

const Footer = () => {
  return (
    <footer className="bg-[#E5E5E5] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              {/* <div className="flex items-center">
                <ArrowRight className="text-[#FF6B35] w-8 h-8 rotate-180" />
                <ArrowRight className="text-[#FF6B35] w-8 h-8 -ml-4" />
              </div> */}
             <img src={logo} alt="Glotekensol Logo" className="h-auto w-[300px]" />
            </Link>
            <p className="text-[#001B3D] text-sm mb-4">
              We design safe, efficient, and code-compliant steel connections that ensure strength, stability, and constructability for all types of projects
            </p>
            <div className="flex space-x-4">
              <Linkedin className="text-[#FF6B35] hover:text-[#001B3D] cursor-pointer transition" size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FF6B35]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#001B3D] hover:text-[#FF6B35] transition text-sm">
                  About Company
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#001B3D] hover:text-[#FF6B35] transition text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#001B3D] hover:text-[#FF6B35] transition text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[#001B3D] hover:text-[#FF6B35] transition text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#001B3D] hover:text-[#FF6B35] transition text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FF6B35]">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#001B3D] hover:text-[#FF6B35] transition text-sm">Design Services</a></li>
              <li><a href="#" className="text-[#001B3D] hover:text-[#FF6B35] transition text-sm">Structural Steel Detailing</a></li>
              <li><a href="#" className="text-[#001B3D] hover:text-[#FF6B35] transition text-sm">Rebar Detailing</a></li>
              <li><a href="#" className="text-[#001B3D] hover:text-[#FF6B35] transition text-sm">Civil Construction</a></li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#FF6B35]">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-[#FF6B35] mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-[#001B3D] text-sm">Glotek Ensol Private Limited
#67 Achutham, 7th Cross
Vidhana Soudha Layout Phase – 1
Agrahara, Kogilu,
Bangalore – 64</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#FF6B35] mr-3 flex-shrink-0" size={18} />
                <span className="text-[#001B3D] text-sm">+91 7892-504-910 , +91 9535-331-282</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#FF6B35] mr-3 flex-shrink-0" size={18} />
                <span className="text-[#001B3D] text-sm">info@glotekensol.com</span>
              </div>
            </div>
            
          
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#001B3D] text-sm">
            © Glotekensol 2026 | All Rights Reserved
          </p>
          <p className="text-[#001B3D] text-sm mt-2 md:mt-0">
            Developed by: Sunsys Technologies
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
