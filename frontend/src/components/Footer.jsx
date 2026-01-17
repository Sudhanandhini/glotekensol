import { Link } from 'react-router-dom'
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, MapPin, Phone, Mail } from 'lucide-react'

import logo from "../assets/footer.png"

const Footer = () => {
  return (
    <footer className="bg-[#001B3D] text-white py-12">
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
            <p className="text-gray-400 text-sm mb-4">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
            </p>
            <div className="flex space-x-4">
              <Facebook className="text-gray-400 hover:text-[#FF6B35] cursor-pointer transition" size={20} />
              <Twitter className="text-gray-400 hover:text-[#FF6B35] cursor-pointer transition" size={20} />
              <Linkedin className="text-gray-400 hover:text-[#FF6B35] cursor-pointer transition" size={20} />
              <Instagram className="text-gray-400 hover:text-[#FF6B35] cursor-pointer transition" size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#FF6B35] transition text-sm">
                  About Company
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#FF6B35] transition text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-[#FF6B35] transition text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-[#FF6B35] transition text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#FF6B35] transition text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition text-sm">Design Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition text-sm">Structural Steel Detailing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition text-sm">Rebar Detailing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FF6B35] transition text-sm">Civil Construction</a></li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-[#FF6B35] mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">Glotek Ensol Private Limited  
#67 Achutham, First Floor  
Vidhana Soudha Layout Phase - 1  
7th Cross 60ft Road  
Agrahara, Kogilu  
Bangalore – 64</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-[#FF6B35] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">+91 7892-504-910 , +91 9535-331-282</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-[#FF6B35] mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400 text-sm">info@example.com</span>
              </div>
            </div>
            
          
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © Glotekensol 2026 | All Rights Reserved
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Developed by: <span className="text-[#FF6B35]">Sunsys Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
