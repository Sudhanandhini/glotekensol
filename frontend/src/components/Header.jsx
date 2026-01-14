import { useState } from 'react'
import { Link, useLocation, NavLink } from 'react-router-dom'
import { Menu, X, Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Users, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const servicesMenu = [
    {
      category: 'Design Services',
      items: [
        { name: 'Connection Design', path: '/connection-design' },
        { name: 'Design Analysis', path: '/design-analysis' }
      ]
    },
    {
      category: 'Structural Steel Detailing',
      items: [
        { name: 'Structural Steel Detailing', path: '/structural-steel-detailing' },
        { name: 'Steel BIM Services', path: '/steel-bim-services' },
        { name: 'Steel 3D Modelling', path: '/steel-3d-modelling' },
        { name: 'Point Cloud 3D Modelling', path: '/point-cloud-3d-modelling' },
        { name: 'Estimate and Costing', path: '/estimate-and-costing' }
      ]
    },
    {
      category: 'Rebar Detailing',
      items: [
        { name: 'Rebar Detailing', path: '/rebar-detailing' },
        { name: 'Rebar Quantity Estimation', path: '/rebar-quantity-estimation' },
        { name: 'Rebar 3D Modelling', path: '/rebar-3d-modelling' }
      ]
    },
    {
      category: 'Civil Construction',
      items: [
        { name: 'Civil Construction Design', path: '/civil-construction-design' },
        { name: 'Civil Estimation & Costing', path: '/civil-estimation-costing' },
        { name: 'Civil Construction Services', path: '/civil-construction-services' },
        { name: 'Civil Renovation Works', path: '/civil-renovation-works' }
      ]
    }
  ]

  return (
    <header>
      {/* Top Bar with Diagonal Cut */}
      <div className="relative overflow-hidden bg-[#001B3D]">
        <div className="flex ">
          {/* Orange Section */}
          <div 
            className="bg-[#FF6B35] text-white py-3 px-4 flex-1 relative" 
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)' }}
          >
            <div className="container mx-auto flex flex-wrap items-center text-sm gap-6 pr-12">
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                <span>25/B Milford Road, New York</span>
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@example.com</span>
              </span>
              <span className="flex items-center gap-2">
                <Users size={16} />
                <span>Sun - Fri (08AM - 10PM)</span>
              </span>
            </div>
          </div>
          
          {/* Dark Blue Section with Social Icons */}
          <div className="bg-[#001B3D] text-white py-3 px-8 flex items-center gap-3">
            <div className="border border-white/30 p-2 rounded cursor-pointer hover:bg-white/10 transition">
              <Instagram size={16} />
            </div>
            <div className="border border-white/30 p-2 rounded cursor-pointer hover:bg-white/10 transition">
              <Facebook size={16} />
            </div>
            <div className="border border-white/30 p-2 rounded cursor-pointer hover:bg-white/10 transition">
              <Twitter size={16} />
            </div>
            <div className="border border-white/30 p-2 rounded cursor-pointer hover:bg-white/10 transition">
              <Linkedin size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <span className="text-[#FF6B35] text-4xl font-bold">Glotekensol</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive ? 'text-[#FF6B35]' : 'text-gray-700 hover:text-[#FF6B35]'
                  }`
                }
              >
                Home
              </NavLink>

              <Link 
                to="/about" 
                className={`font-medium transition ${isActive('/about') ? 'text-[#FF6B35]' : 'text-gray-700 hover:text-[#FF6B35]'}`}
              >
                About
              </Link>
              
              {/* Services Mega Menu with Clickable Link */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1">
                  <Link 
                    to="/services"
                    className={`font-medium transition ${
                      isActive('/services') || location.pathname.startsWith('/services/') 
                        ? 'text-[#FF6B35]' 
                        : 'text-gray-700 hover:text-[#FF6B35]'
                    }`}
                  >
                    Services
                  </Link>
                  <button className="text-gray-700 hover:text-[#FF6B35] transition py-2">
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                </div>
                
                {/* Mega Menu Dropdown */}
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 top-full pt-2 z-50">
                    <div className="bg-white shadow-2xl rounded-lg overflow-hidden min-w-[800px] border border-gray-200">
                      <div className="grid grid-cols-2 gap-0">
                        {servicesMenu.map((section, idx) => (
                          <div key={section.category}>
                            <div className={`${idx % 2 === 0 ? 'bg-[#FF6B35]' : 'bg-[#001B3D]'} text-white px-6 py-3 font-bold text-sm`}>
                              {section.category}
                            </div>
                            <div className="bg-white">
                              {section.items.map((item) => (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className="block px-6 py-3 text-gray-700 hover:bg-[#FF6B35] hover:text-white transition-colors duration-200 border-b border-gray-100 last:border-0"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link 
                to="/gallery" 
                className={`font-medium transition ${isActive('/gallery') ? 'text-[#FF6B35]' : 'text-gray-700 hover:text-[#FF6B35]'}`}
              >
                Gallery
              </Link>
              <Link 
                to="/careers" 
                className={`font-medium transition ${isActive('/careers') ? 'text-[#FF6B35]' : 'text-gray-700 hover:text-[#FF6B35]'}`}
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className={`font-medium transition ${isActive('/contact') ? 'text-[#FF6B35]' : 'text-gray-700 hover:text-[#FF6B35]'}`}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="bg-[#FF6B35] text-white px-6 py-2 rounded hover:bg-[#ff5722] transition"
              >
                Get A Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-[#001B3D]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 space-y-2">
              <Link 
                to="/" 
                className="block py-2 text-gray-700 hover:text-[#FF6B35]" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block py-2 text-gray-700 hover:text-[#FF6B35]" 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services with Clickable Link */}
              <div>
                <div className="flex items-center justify-between">
                  <Link 
                    to="/services"
                    className="flex-1 py-2 text-gray-700 hover:text-[#FF6B35]"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setActiveDropdown(null)
                    }}
                  >
                    Services
                  </Link>
                  <button 
                    className="py-2 px-2 text-gray-700 hover:text-[#FF6B35]"
                    onClick={() => setActiveDropdown(activeDropdown === 'services-mobile' ? null : 'services-mobile')}
                  >
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform ${activeDropdown === 'services-mobile' ? 'rotate-180' : ''}`} 
                    />
                  </button>
                </div>
                
                {activeDropdown === 'services-mobile' && (
                  <div className="pl-4 space-y-2 mt-2">
                    {servicesMenu.map((section) => (
                      <div key={section.category}>
                        <div className="font-bold text-[#FF6B35] text-sm py-2">{section.category}</div>
                        {section.items.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="block py-2 text-sm text-gray-600 hover:text-[#FF6B35] pl-2"
                            onClick={() => {
                              setIsMenuOpen(false)
                              setActiveDropdown(null)
                            }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/gallery" 
                className="block py-2 text-gray-700 hover:text-[#FF6B35]" 
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/careers" 
                className="block py-2 text-gray-700 hover:text-[#FF6B35]" 
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                to="/contact" 
                className="block py-2 text-gray-700 hover:text-[#FF6B35]" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block bg-[#FF6B35] text-white px-6 py-2 rounded mt-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get A Quote
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header