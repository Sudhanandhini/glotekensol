import { Link } from 'react-router-dom'
import { 
  Rocket, 
  Layers, 
  PenTool, 
  Wrench, 
  Users, 
  Settings, 
  Home,
  Building,
  Hammer,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Home size={48} />,
      title: 'Building New Homes',
      desc: 'Complete residential construction services from ground breaking to final walkthrough. We build quality homes that stand the test of time.',
      features: ['Custom home design', 'Quality materials', 'Energy-efficient construction', 'On-time delivery']
    },
    {
      icon: <Building size={48} />,
      title: 'Commercial Construction',
      desc: 'Expert commercial building solutions for offices, retail spaces, and industrial facilities with focus on functionality and aesthetics.',
      features: ['Office buildings', 'Retail centers', 'Warehouses', 'Mixed-use developments']
    },
    {
      icon: <Hammer size={48} />,
      title: 'Renovation & Remodeling',
      desc: 'Transform your existing space with our comprehensive renovation and remodeling services for homes and commercial properties.',
      features: ['Kitchen remodeling', 'Bathroom renovation', 'Room additions', 'Complete makeovers']
    },
    {
      icon: <Layers size={48} />,
      title: 'Bridge Construction',
      desc: 'Specialized engineering and construction services for bridges and overpasses with emphasis on safety and durability.',
      features: ['Highway bridges', 'Pedestrian bridges', 'Railway overpasses', 'Structural engineering']
    },
    {
      icon: <PenTool size={48} />,
      title: 'Architecture Design',
      desc: 'Innovative architectural design services that blend creativity, functionality, and sustainability for stunning results.',
      features: ['3D modeling', 'Interior design', 'Landscape architecture', 'Sustainable design']
    },
    {
      icon: <Settings size={48} />,
      title: 'Interior Finishing',
      desc: 'Professional interior finishing services including flooring, painting, fixtures, and custom millwork for perfect results.',
      features: ['Flooring installation', 'Wall treatments', 'Custom cabinetry', 'Lighting design']
    },
    {
      icon: <Wrench size={48} />,
      title: 'Maintenance Services',
      desc: 'Ongoing maintenance and repair services to keep your property in excellent condition year-round.',
      features: ['Preventive maintenance', 'Emergency repairs', 'HVAC services', 'Plumbing & electrical']
    },
    {
      icon: <Users size={48} />,
      title: 'Project Management',
      desc: 'Comprehensive project management services ensuring your construction project is completed on time and within budget.',
      features: ['Budget planning', 'Timeline management', 'Quality control', 'Contractor coordination']
    },
    {
      icon: <Rocket size={48} />,
      title: 'Consulting Services',
      desc: 'Expert construction consulting to help you make informed decisions about your building project.',
      features: ['Feasibility studies', 'Cost estimation', 'Material selection', 'Building codes compliance']
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0, 27, 61, 0.8), rgba(0, 27, 61, 0.8)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600')"
      }}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Comprehensive Construction Solutions</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">What We Do</p>
            <h2 className="text-4xl font-bold text-[#001B3D] mb-4">Complete Construction Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From residential homes to commercial buildings, we offer a full range of construction services to meet all your building needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-lg transition-all duration-300 hover:scale-105 ${
                  index % 3 === 2 ? 'bg-[#FF6B35] text-white' : 'bg-[#001B3D] text-white'
                }`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="mb-4 opacity-90">{service.desc}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-white font-medium hover:underline flex items-center">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">Why Choose Us</p>
              <h2 className="text-4xl font-bold text-[#001B3D] mb-4">
                High Quality Construction Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive construction services with a focus on quality, safety, and customer satisfaction. Our experienced team handles every aspect of your project with professionalism and expertise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001B3D] mb-1">Licensed & Insured</h4>
                    <p className="text-gray-600">Fully licensed, bonded, and insured for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001B3D] mb-1">Expert Team</h4>
                    <p className="text-gray-600">Skilled professionals with years of construction experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001B3D] mb-1">Quality Guaranteed</h4>
                    <p className="text-gray-600">Comprehensive warranty and quality assurance on all projects.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800" 
                alt="Construction Equipment" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">Our Process</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">How We Work</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Meet with our team to discuss your project requirements and vision.' },
              { step: '02', title: 'Planning', desc: 'Develop detailed plans, timeline, and budget for your project.' },
              { step: '03', title: 'Execution', desc: 'Expert construction with regular updates and quality control.' },
              { step: '04', title: 'Completion', desc: 'Final walkthrough and handover of your completed project.' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#001B3D] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001B3D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get in touch with us today for a free consultation and quote.
          </p>
          <Link 
            to="/contact" 
            className="bg-[#FF6B35] text-white px-8 py-3 rounded hover:bg-[#ff5722] transition font-medium inline-block"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
