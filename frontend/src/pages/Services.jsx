import { Link } from 'react-router-dom'
import { 
  Ruler, 
  Layers, 
  Box, 
  Cuboid,
  Calculator,
  Building2,
  HardHat,
  Construction,
  PenTool,
  CircleDot,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollToTop from '../components/ScrollToTop'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const Services = () => {
  const services = [
    // Design Services
    {
      icon: <PenTool size={48} />,
      title: 'Connection Design',
      desc: 'Professional steel connection design services ensuring structural integrity and safety for your projects.',
      features: ['Moment connections', 'Shear connections', 'Base plate design', 'Load analysis'],
      category: 'design',
      bgColor: 'bg-[#001B3D]',
      link: '/connection-design'
    },
    {
      icon: <Ruler size={48} />,
      title: 'Design Analysis',
      desc: 'Comprehensive structural design analysis using advanced software and industry best practices.',
      features: ['Stress analysis', 'Load calculations', 'FEA modeling', 'Code compliance'],
      category: 'design',
      bgColor: 'bg-[#FF6B35]',
      link: '/design-analysis'
    },
    
    // Structural Steel Detailing
    {
      icon: <Building2 size={48} />,
      title: 'Structural Steel Detailing',
      desc: 'Detailed structural steel drawings and fabrication details for construction projects of all scales.',
      features: ['Fabrication drawings', 'Erection plans', 'Material lists', 'Connection details'],
      category: 'steel',
      bgColor: 'bg-[#001B3D]',
      link: '/structural-steel-detailing'
    },
    {
      icon: <Layers size={48} />,
      title: 'Steel BIM Services',
      desc: 'Building Information Modeling services for steel structures with 3D visualization and coordination.',
      features: ['3D BIM modeling', 'Clash detection', 'Model coordination', 'As-built documentation'],
      category: 'steel',
      bgColor: 'bg-[#FF6B35]',
      link: '/steel-bim-services'
    },
    {
      icon: <Box size={48} />,
      title: 'Steel 3D Modelling',
      desc: 'Advanced 3D modeling services for steel structures using Tekla, Revit, and other industry tools.',
      features: ['Tekla modeling', 'Revit structures', 'Shop drawings', 'Fabrication models'],
      category: 'steel',
      bgColor: 'bg-[#001B3D]',
      link: '/steel-3d-modelling'
    },
    {
      icon: <Cuboid size={48} />,
      title: 'Point Cloud 3D Modelling',
      desc: 'Accurate as-built modeling from point cloud data for renovation and retrofit projects.',
      features: ['Laser scanning integration', 'As-built models', 'Retrofit planning', 'Accuracy verification'],
      category: 'steel',
      bgColor: 'bg-[#FF6B35]',
      link: '/steel-point-cloud'
    },
    {
      icon: <Calculator size={48} />,
      title: 'Estimate and Costing',
      desc: 'Detailed material takeoffs and cost estimation for steel structure projects.',
      features: ['Material quantification', 'Cost breakdown', 'Budget planning', 'Value engineering'],
      category: 'steel',
      bgColor: 'bg-[#001B3D]',
      link: '/estimate-costing'
    },
    
    // Rebar Detailing
    {
      icon: <CircleDot size={48} />,
      title: 'Rebar Detailing',
      desc: 'Professional rebar detailing services with accurate bar bending schedules and placement drawings.',
      features: ['Bar bending schedules', 'Placement drawings', 'Bar lists', 'Standards compliance'],
      category: 'rebar',
      bgColor: 'bg-[#FF6B35]',
      link: '/rebar-detailing'
    },
    {
      icon: <Calculator size={48} />,
      title: 'Rebar Quantity Estimation',
      desc: 'Precise rebar quantity takeoffs and material estimation for concrete structures.',
      features: ['Material takeoffs', 'Weight calculations', 'Cost estimation', 'Waste minimization'],
      category: 'rebar',
      bgColor: 'bg-[#001B3D]',
      link: '/rebar-estimation'
    },
    {
      icon: <Box size={48} />,
      title: 'Rebar 3D Modelling',
      desc: 'Three-dimensional rebar modeling for visualization and coordination in concrete projects.',
      features: ['3D visualization', 'Clash detection', 'Coordination drawings', 'Installation sequences'],
      category: 'rebar',
      bgColor: 'bg-[#FF6B35]',
      link: '/rebar-3d-modelling'
    },
    
    // Civil Construction
    {
      icon: <Construction size={48} />,
      title: 'Civil Construction Design',
      desc: 'Comprehensive civil engineering design services for infrastructure and building projects.',
      features: ['Site planning', 'Foundation design', 'Structural design', 'MEP coordination'],
      category: 'civil',
      bgColor: 'bg-[#001B3D]',
      link: '/civil-construction-design'
    },
    {
      icon: <Calculator size={48} />,
      title: 'Civil Estimation & Costing',
      desc: 'Accurate cost estimation and budgeting for civil construction and infrastructure projects.',
      features: ['Quantity surveying', 'Cost analysis', 'Budget preparation', 'Tender documentation'],
      category: 'civil',
      bgColor: 'bg-[#FF6B35]',
      link: '/civil-estimation'
    },
    {
      icon: <HardHat size={48} />,
      title: 'Civil Construction Services',
      desc: 'Complete civil construction management and execution services from start to finish.',
      features: ['Project management', 'Site supervision', 'Quality control', 'Safety compliance'],
      category: 'civil',
      bgColor: 'bg-[#001B3D]',
      link: '/civil-services'
    },
    {
      icon: <Building2 size={48} />,
      title: 'Civil Renovation Works',
      desc: 'Expert renovation and rehabilitation services for existing civil structures and buildings.',
      features: ['Structure assessment', 'Retrofit design', 'Renovation planning', 'Code upgrades'],
      category: 'civil',
      bgColor: 'bg-[#FF6B35]',
      link: '/civil-renovation'
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[400px] bg-cover bg-center overflow-hidden" style={{
        backgroundImage: "linear-gradient(rgba(0, 27, 61, 0.85), rgba(0, 27, 61, 0.85)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600')"
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 h-full flex items-center justify-center"
        >
          <div className="text-center text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl font-bold mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl"
            >
              Comprehensive Construction Solutions
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">What We Do</p>
            <h2 className="text-4xl font-bold text-[#001B3D] mb-4">Complete Construction Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From structural steel detailing to civil construction, we offer specialized engineering and construction services for projects of all sizes.
            </p>
          </motion.div>

          {/* Design Services */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-block bg-[#FF6B35] text-white px-6 py-2 rounded-full mb-2">
                <span className="font-semibold uppercase tracking-wide text-sm">Design Services</span>
              </div>
              <h3 className="text-3xl font-bold text-[#001B3D]">Professional Design Solutions</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.filter(s => s.category === 'design').map((service, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className={`${service.bgColor} text-white p-8 rounded-2xl shadow-xl`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="mb-6 opacity-90">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-white font-medium hover:underline flex items-center"
                    >
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Structural Steel Detailing */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-block bg-[#001B3D] text-white px-6 py-2 rounded-full mb-2">
                <span className="font-semibold uppercase tracking-wide text-sm">Structural Steel Detailing</span>
              </div>
              <h3 className="text-3xl font-bold text-[#001B3D]">Advanced Steel Detailing Services</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(s => s.category === 'steel').map((service, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className={`${service.bgColor} text-white p-8 rounded-2xl shadow-xl`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="mb-6 opacity-90">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-white font-medium hover:underline flex items-center"
                    >
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Rebar Detailing */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-block bg-[#FF6B35] text-white px-6 py-2 rounded-full mb-2">
                <span className="font-semibold uppercase tracking-wide text-sm">Rebar Detailing</span>
              </div>
              <h3 className="text-3xl font-bold text-[#001B3D]">Expert Rebar Detailing Services</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.filter(s => s.category === 'rebar').map((service, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className={`${service.bgColor} text-white p-8 rounded-2xl shadow-xl`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="mb-6 opacity-90">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-white font-medium hover:underline flex items-center"
                    >
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Civil Construction */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="inline-block bg-[#001B3D] text-white px-6 py-2 rounded-full mb-2">
                <span className="font-semibold uppercase tracking-wide text-sm">Civil Construction</span>
              </div>
              <h3 className="text-3xl font-bold text-[#001B3D]">Complete Civil Construction Solutions</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.filter(s => s.category === 'civil').map((service, index) => (
                <motion.div 
                  key={index}
                  variants={scaleIn}
                  whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)" }}
                  transition={{ duration: 0.3 }}
                  className={`${service.bgColor} text-white p-8 rounded-2xl shadow-xl`}
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="mb-6 opacity-90">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <motion.button 
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="text-white font-medium hover-underline flex items-center"
                    >
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">Why Choose Us</p>
              <h2 className="text-4xl font-bold text-[#001B3D] mb-4">
                High Quality Engineering Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                We provide specialized structural engineering and construction services with a focus on precision, quality, and industry compliance. Our experienced team delivers exceptional results using cutting-edge technology.
              </p>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  {
                    num: '1',
                    title: 'Industry Expertise',
                    desc: 'Specialized knowledge in structural steel, rebar, and civil engineering.'
                  },
                  {
                    num: '2',
                    title: 'Advanced Technology',
                    desc: 'Latest software including Tekla, Revit, and industry-standard tools.'
                  },
                  {
                    num: '3',
                    title: 'Quality Assurance',
                    desc: 'Rigorous quality control and compliance with international standards.'
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start group"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 mr-4 shadow-lg"
                    >
                      {item.num}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-[#001B3D] mb-1 group-hover:text-[#FF6B35] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800" 
                alt="Engineering Services" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">Our Process</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">How We Work</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { step: '01', title: 'Consultation', desc: 'Understand your project requirements and technical specifications.' },
              { step: '02', title: 'Design & Planning', desc: 'Develop detailed designs, models, and project documentation.' },
              { step: '03', title: 'Execution', desc: 'Deliver high-quality detailing and engineering services.' },
              { step: '04', title: 'Quality Check', desc: 'Thorough review and quality assurance before handover.' }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-xl"
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold text-[#001B3D] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#001B3D] to-[#002447] text-white overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="container mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl mb-8 text-gray-300">
            Get in touch with us today for a free consultation and quote.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              to="/contact" 
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 10px 40px rgba(255, 107, 53, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF6B35] text-white px-10 py-4 rounded-lg hover:bg-[#ff5722] transition-all font-medium shadow-xl"
              >
                Contact Us Now
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <ScrollToTop />
    </div>
  )
}

export default Services