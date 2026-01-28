import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronLeft, 
  ChevronRight, 
  Play,  
  PenTool, 
  Building2, 
  CircleDot, 
  Construction,
  HardHat, 
  Wrench, 
  Box, 
  Blocks
} from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollToTop from '../components/ScrollToTop'

import steel  from "../assets/steel.jpg"
import des  from "../assets/des.jpg"
import bu  from "../assets/build.jpg"
import rein from "../assets/rein.jpg"
import img1 from "../assets/rein.jpg"


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentLogoSet, setCurrentLogoSet] = useState(0)

  const heroSlides = [
    {
      image: bu,
      title: "Design Services",
      subtitle: "We Are Best Builders",
      description: "Connection Design | Analysis | Structural Modelling"
    },
    {
      image: rein,
      title: "Reinforcement Detailing",
      subtitle: "Building Your Dreams",
      description: "3D Modelling | Detailing | Quantity Estimation"
    },
     {
      image: steel,
      title: "Structural Steel Detailing",
      subtitle: "Building Your Dreams",
      description: "Structural 3D Modelling | Detailing | Estimate and Costing |  Structural BIM Services | Structural Point Cloud  Modelling"
    },
    {
      image: des,
      title: "Civil Construction ",
      subtitle: "Quality Craftsmanship",
      description: "Designing | Estimation and Costing | Residential Building Construction | Commercial Building  Construction | Industrial Building Construction"
    }
  ]

  const whatWeDoServices = [
    {
      icon: <HardHat className="w-12 h-12" />,
      title: 'Structural steel connection design',
      description: 'We design safe, efficient, and code-compliant steel connections that ensure strength, stability, and constructability for all types of projects.'
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Structural steel detailing',
      description: 'Our detailed fabrication drawings provide accurate shop and erection details to support smooth manufacturing and on-site installation.'
    },
    {
      icon: <Box className="w-12 h-12" />,
      title: 'Reinforcement 3D modelling',
      description: 'We create precise 3D reinforcement models that improve coordination, reduce errors, and enhance project visualization.'
    },
    {
      icon: <Blocks className="w-12 h-12" />,
      title: 'Reinforcement detailing',
      description: 'Our reinforcement detailing services deliver clear, accurate drawings that ensure proper placement, compliance, and efficient construction.'
    }
  ]

  // Client Logos - Multiple sets of 4
  const allClientLogos = [
    // Set 1
    [
      { name: 'Client 1', logo: 'https://via.placeholder.com/200x80/001B3D/FFFFFF?text=Client+1' },
      { name: 'Client 2', logo: 'https://via.placeholder.com/200x80/FF6B35/FFFFFF?text=Client+2' },
      { name: 'Client 3', logo: 'https://via.placeholder.com/200x80/001B3D/FFFFFF?text=Client+3' },
      { name: 'Client 4', logo: 'https://via.placeholder.com/200x80/FF6B35/FFFFFF?text=Client+4' }
    ],
    // Set 2
    [
      { name: 'Client 5', logo: 'https://via.placeholder.com/200x80/001B3D/FFFFFF?text=Client+5' },
      { name: 'Client 6', logo: 'https://via.placeholder.com/200x80/FF6B35/FFFFFF?text=Client+6' },
      { name: 'Client 7', logo: 'https://via.placeholder.com/200x80/001B3D/FFFFFF?text=Client+7' },
      { name: 'Client 8', logo: 'https://via.placeholder.com/200x80/FF6B35/FFFFFF?text=Client+8' }
    ],
    // Set 3
    [
      { name: 'Client 9', logo: 'https://via.placeholder.com/200x80/001B3D/FFFFFF?text=Client+9' },
      { name: 'Client 10', logo: 'https://via.placeholder.com/200x80/FF6B35/FFFFFF?text=Client+10' },
      { name: 'Client 11', logo: 'https://via.placeholder.com/200x80/001B3D/FFFFFF?text=Client+11' },
      { name: 'Client 12', logo: 'https://via.placeholder.com/200x80/FF6B35/FFFFFF?text=Client+12' }
    ]
  ]

  // Counter Animation Hook
  const useCounter = (end, duration = 2000, startCounting) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!startCounting) return

      let startTime
      let animationFrame

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime

        const percentage = Math.min(progress / duration, 1)
        const currentCount = Math.floor(percentage * end)

        setCount(currentCount)

        if (percentage < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }, [end, duration, startCounting])

    return count
  }

  // Stats with counter - 3 sections only
const StatsCounter = () => {
  const [startCounting, setStartCounting] = useState(false)
  const [hasCountedOnce, setHasCountedOnce] = useState(false)
  const sectionRef = useRef(null)

  const count1 = useCounter(300, 2000, startCounting)
  const count2 = useCounter(80, 2000, startCounting)
  const count3 = useCounter(50, 2000, startCounting)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCountedOnce) {
          setStartCounting(true)
          setHasCountedOnce(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasCountedOnce])

  const stats = [
    { number: count1, suffix: '+', label: 'Projects Completed' },
    { number: count2, suffix: '+', label: 'Happy Clients' },
    { number: count3, suffix: '+', label: 'Expert Team' }
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-[#001B3D] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-5xl md:text-6xl font-bold text-[#FF6B35] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  // Auto-play logo slider - slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLogoSet((prev) => (prev + 1) % allClientLogos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [allClientLogos.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const nextLogoSet = () => {
    setCurrentLogoSet((prev) => (prev + 1) % allClientLogos.length)
  }

  const prevLogoSet = () => {
    setCurrentLogoSet((prev) => (prev - 1 + allClientLogos.length) % allClientLogos.length)
  }

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 27, 61, 0.7), rgba(0, 27, 61, 0.7)), url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white max-w-2xl"
              >
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={index === currentSlide ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-5xl md:text-6xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={index === currentSlide ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-lg mb-8 text-gray-200"
                >
                  {slide.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={index === currentSlide ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    to="/contact"
                    className="bg-[#FF6B35] text-white px-8 py-3 rounded hover:bg-[#ff5722] transition-all duration-300 font-medium hover:shadow-lg transform hover:-translate-y-1"
                  >
                    Get Started
                  </Link>
                  {/* <button className="bg-white text-[#001B3D] px-8 py-3 rounded hover:bg-gray-100 transition-all duration-300 font-medium flex items-center hover:shadow-lg transform hover:-translate-y-1">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center mr-3 hover:scale-110 transition-transform">
                      <Play size={16} className="ml-1" />
                    </div>
                    How We Work
                  </button> */}
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-[#FF6B35]'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 relative overflow-hidden bg-gradient-to-b from-[#FF6B35] from-50% to-white to-50%">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start justify-between mb-12"
          >
            <div className="text-white mb-6 md:mb-0">
              <p className="text-sm font-semibold tracking-wider mb-2">WHAT WE DO?</p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#001B3D]">We Work Creatively.</h2>
            </div>
            <Link
              to="/services"
              className="bg-[#001B3D] text-white px-8 py-3 rounded hover:bg-[#002447] transition-all duration-300 font-medium flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1"
            >
              Discover More
              <ArrowRight size={20} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  index === 3 ? 'bg-white hover:bg-[#001B3D]' : 'bg-white hover:bg-[#001B3D]'
                }`}
              >
                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`mb-6 transition-all duration-300 transform group-hover:scale-110 ${
                      index === 3 ? 'text-[#FF6B35] group-hover:text-white' : 'text-[#FF6B35] group-hover:text-white'
                    }`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      index === 3 ? 'text-[#FF6B35] group-hover:text-white' : 'text-[#FF6B35] group-hover:text-white'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm mb-6 transition-colors duration-300 ${
                      index === 3 ? 'text-gray-700 group-hover:text-white' : 'text-gray-700 group-hover:text-white'
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Button */}
                  <Link
                    to="/services"
                    className={`inline-block px-6 py-2.5 rounded font-medium transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
                      index === 3
                        ? 'bg-[#FF6B35] text-white hover:bg-white hover:text-[#FF6B35]'
                        : 'bg-[#FF6B35] text-white group-hover:bg-white group-hover:text-[#FF6B35]'
                    }`}
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
                alt="Blueprint"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">About Company</p>
              <h2 className="text-4xl font-bold text-[#001B3D] mb-4">
                World's Largest And Trusted Engineering Solutions Company
              </h2>
              <p className="text-gray-600 mb-6">
                We provide comprehensive structural engineering design and detailing services for all types of structures, 
                complying with international standards and delivering excellence in every project.
              </p>
              <div className="space-y-3 mb-6">
                {[
                  'Professional and experienced construction team with decades of expertise.',
                  'Quality materials and modern construction techniques for lasting results.',
                  'On-time project delivery and comprehensive customer support.'
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <CheckCircle className="text-[#FF6B35] mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-gray-600">{text}</p>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/about"
                className="bg-[#001B3D] text-white px-8 py-3 rounded hover:bg-[#002447] transition-all duration-300 font-medium inline-block hover:shadow-lg transform hover:-translate-y-1"
              >
                Read More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Orange Content */}
          <div className="bg-[#FF6B35] text-white p-8 lg:p-16 flex items-center">
            <div>
              <p className="text-sm uppercase tracking-wider mb-4 font-semibold">Who We Are</p>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-[#001B3D] mb-6 leading-tight">
           Professional Industry Experience.
              </h2>
              
              <div className="space-y-4 mb-8">
                <p className="text-white leading-relaxed">
                  <strong>WELCOME TO GTES</strong>
                </p>
                <p className="text-white leading-relaxed">
                  GTES was established in 2023 as a structural engineering design and detailing company. 
                  We provide Structural Design & Detailing services for all kinds of structures in Imperial 
                  as well as Metric units complying with AISC, Canadian, and Middle-East Standards.
                </p>
                <p className="text-white leading-relaxed">
                  We at GTES provide total Steel Detailing & REBAR Detailing solutions to our valued customers 
                  worldwide and assist them in creating outsourcing strategies to build long-term relationships 
                  and harness the power of outsourcing efficiently.
                </p>
                <p className="text-white leading-relaxed">
                  Our Expert team of Structural Engineers, Tekla Modelers, Checkers, and Steel detailers has 
                  decades of experience working with AISC codes to execute various Industrial, Commercial buildings 
                  (Small, mid, and high-rise structures), Residential buildings, Super Markets, Malls, Airports, 
                  and Miscellaneous projects (Stairs, Handrails, Ladders, Canopy, Grating Platforms, etc.) on the 
                  expected turnaround time and per your specific requirements.
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-[#001B3D] text-white px-8 py-3 rounded hover:bg-[#002447] transition-all duration-300 font-medium"
              >
                Read More
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Right - Fixed Background Image */}
          <div
            className="relative bg-cover bg-center min-h-[600px] flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1200')`,
              backgroundAttachment: 'fixed'
            }}
          >
            {/* Play Button */}
            {/* <div className="text-center z-10">
              <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform mb-6 mx-auto">
                <Play className="w-8 h-8 text-[#FF6B35] ml-1" fill="#FF6B35" />
              </button>
              <div className="text-white max-w-md mx-auto px-4">
                <p className="text-lg leading-relaxed">
                  Watch how we transform your vision into reality with precision engineering and innovative solutions.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Stats Section with Counter - 3 Sections Only */}
      <StatsCounter />

      {/* Services Preview - Redesigned */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="text-center mb-16"
          >
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold"
            >
              Our Services
            </motion.p>
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl font-bold text-[#001B3D] mb-4"
            >
              What We Offer
            </motion.h2>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Specialized structural engineering and construction services using cutting-edge technology and industry expertise.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              {
                img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600',
                icon: <PenTool className="text-white" size={40} />,
                title: 'Design Services',
                desc: 'Professional connection design and structural analysis using advanced engineering software.',
                link: '/services',
                gradient: 'from-[#001B3D] to-indigo-700'
              },
              {
                img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600',
                icon: <Building2 className="text-white" size={40} />,
                title: 'Structural Steel Detailing',
                desc: 'Complete steel detailing services including BIM, 3D modeling, and fabrication drawings.',
                link: '/services',
                gradient: 'from-orange-500 to-red-600'
              },
              {
                img: img1,
                icon: <CircleDot className="text-white" size={40} />,
                title: 'Rebar Detailing',
                desc: 'Expert rebar detailing with accurate bar bending schedules and placement drawings.',
                link: '/services',
                gradient: 'from-[#001B3D] to-indigo-700'
              },
              {
                img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600',
                icon: <Construction className="text-white" size={40} />,
                title: 'Civil Construction',
                desc: 'Complete civil construction design, estimation, and project management services.',
                link: '/services',
                gradient: 'from-orange-500 to-red-600'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }
                }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Background Image */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-60 group-hover:opacity-75 transition-opacity duration-300`}></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Icon */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 shadow-lg"
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-white text-2xl font-bold mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {service.desc}
                  </p>

                  {/* Learn More Link */}
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-white font-semibold hover:gap-2 transition-all duration-300"
                  >
                    Learn More 
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-1" size={18} />
                    </motion.div>
                  </Link>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 40px rgba(255, 107, 53, 0.3)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF6B35] text-white px-10 py-4 rounded-lg hover:bg-[#ff5722] transition-all duration-300 font-semibold inline-flex items-center space-x-2 shadow-lg"
              >
                <span>View All Services</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Logo Slider - 4 Logos Displayed at Once */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">OUR CLIENTS</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">Trusted By Leading Companies</h2>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Logo Slider - Shows 4 at a time */}
            <div className="relative overflow-hidden py-8">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentLogoSet * 100}%)` }}
              >
                {allClientLogos.map((logoSet, setIndex) => (
                  <div
                    key={setIndex}
                    className="w-full flex-shrink-0 grid grid-cols-2 md:grid-cols-4 gap-8 px-4"
                  >
                    {logoSet.map((client, logoIndex) => (
                      <motion.div
                        key={logoIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: logoIndex * 0.1 }}
                        className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                      >
                        <img 
                          src={client.logo} 
                          alt={client.name}
                          className="max-w-full max-h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevLogoSet}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-[#FF6B35] text-[#001B3D] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextLogoSet}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-[#FF6B35] text-[#001B3D] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-3 mt-8">
              {allClientLogos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentLogoSet(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentLogoSet
                      ? 'w-12 h-3 bg-[#FF6B35]'
                      : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  )
}

export default Home