import { CheckCircle, Award, Users, Target, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Handshake, Lightbulb, Star } from 'lucide-react'


import ScrollToTop from '../components/ScrollToTop';



// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])

  return <span ref={countRef}>{count}{suffix}</span>
}

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[300px] bg-cover bg-center overflow-hidden" style={{
        backgroundImage: "linear-gradient(rgba(0, 27, 61, 0.8), rgba(0, 27, 61, 0.8)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600')"
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
              className="text-5xl font-bold mb-4"
            >
              About Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl"
            >
              Building Excellence Since 1999
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <motion.p 
                variants={fadeInUp}
                className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold"
              >
                About Emuo
              </motion.p>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl font-bold text-[#001B3D] mb-4"
              >
                World's Largest And Trusted Construction Company
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-600 mb-4"
              >
               We at GTES, provides total Steel Detailing & REBAR Detailing solutions to our valued customers worldwide and assist them in creating outsourcing strategies to build long term relationships and harness the power of outsourcing efficiently.

We make the most of our highly qualified human resources and modern-day techniques to deliver projects before deadlines.
Our transparent way of functioning has helped us win many more customers, who now trust us with their future projects as well.

We offer a range of services, including structural steel detailing, rebar detailing, and 3D modelling. Our services are designed to help our clients achieve maximum efficiency, safety, and cost-effectiveness in their construction projects.

We use the latest technology and software to ensure that our services are accurate and up to date with industry standards. Our team is dedicated to continuous learning and staying up to date with the latest trends and techniques in steel and rebar detailing.
 At our company, we believe that transparency is key to a successful project. That’s why we work closely with our clients to understand their needs and provide customized solutions that meet their unique requirements. 

Thank you for considering our services. We look forward to working with you and helping you achieve your goals in the construction industry. Contact us today to learn more about our steel and rebar detailing services.  </motion.p>
              {/* <motion.p 
                variants={fadeInUp}
                className="text-gray-600 mb-6"
              >
                We specialize in residential, commercial, and industrial construction projects. Our team of skilled professionals uses the latest technology and construction methods to ensure superior results.
              </motion.p> */}
              {/* <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 mb-6"
              >
                {[
                  'Expert team with decades of combined experience in construction',
                  'State-of-the-art equipment and modern construction techniques',
                  'Commitment to safety, quality, and environmental sustainability',
                  'Comprehensive project management from concept to completion'
                ].map((text, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start group"
                  >
                    <CheckCircle className="text-[#FF6B35] mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <p className="text-gray-600">{text}</p>
                  </motion.div>
                ))}
              </motion.div> */}
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="relative"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800" 
                alt="Construction Site" 
                className="rounded-lg shadow-xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-[#FF6B35] text-white p-8 rounded-lg shadow-lg"
              >
                <div className="text-5xl font-bold mb-1">
                  <AnimatedCounter end={300} suffix="+" />
                </div>
                <div className="text-sm">Completed Projects</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

   

      {/* Mission, Vision & Values Section - Redesigned */}
<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4">
    {/* Optional Section Header */}
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-16"
    >
      <motion.p 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold"
      >
        Our Foundation
      </motion.p>
      <h2 className="text-4xl font-bold text-[#001B3D]">
        What Drives Us Forward
      </h2>
    </motion.div>

    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
    >
      {/* Our Mission */}
      <motion.div 
        variants={scaleIn}
        whileHover={{ 
          y: -15, 
          boxShadow: "0 25px 60px rgba(255, 107, 53, 0.15)" 
        }}
        transition={{ duration: 0.3 }}
        className="bg-white p-10 rounded-3xl shadow-lg text-center group relative overflow-hidden"
      >
        {/* Decorative Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <motion.div
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative w-28 h-28 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
        >
          <Handshake className="text-white" size={48} strokeWidth={2} />
        </motion.div>
        
        <h3 className="relative text-2xl font-bold text-[#001B3D] mb-5 uppercase tracking-wide">
          Our Mission
        </h3>
        <p className="relative text-gray-600 leading-relaxed text-base">
          Integrity, reliability, transparency is and passion towards everything we are involved in.
        </p>
      </motion.div>

      {/* Our Vision */}
      <motion.div 
        variants={scaleIn}
        whileHover={{ 
          y: -15, 
          boxShadow: "0 25px 60px rgba(255, 107, 53, 0.15)" 
        }}
        transition={{ duration: 0.3 }}
        className="bg-white p-10 rounded-3xl shadow-lg text-center group relative overflow-hidden"
      >
        {/* Decorative Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <motion.div
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative w-28 h-28 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
        >
          <Lightbulb className="text-white" size={48} strokeWidth={2} />
        </motion.div>
        
        <h3 className="relative text-2xl font-bold text-[#001B3D] mb-5 uppercase tracking-wide">
          Our Vision
        </h3>
        <p className="relative text-gray-600 leading-relaxed text-base">
          Everyday we aspire and endeavor to create an better world with our team and services.
        </p>
      </motion.div>

      {/* Our Value */}
      <motion.div 
        variants={scaleIn}
        whileHover={{ 
          y: -15, 
          boxShadow: "0 25px 60px rgba(255, 107, 53, 0.15)" 
        }}
        transition={{ duration: 0.3 }}
        className="bg-white p-10 rounded-3xl shadow-lg text-center group relative overflow-hidden"
      >
        {/* Decorative Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <motion.div
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative w-28 h-28 bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
        >
          <Star className="text-white" size={48} strokeWidth={2} fill="white" />
        </motion.div>
        
        <h3 className="relative text-2xl font-bold text-[#001B3D] mb-5 uppercase tracking-wide">
          Our Value
        </h3>
        <p className="relative text-gray-600 leading-relaxed text-base">
          Delight our Customer. Strive for excellence. and be the BEST
        </p>
      </motion.div>
    </motion.div>
  </div>
</section>

      {/* Experience Section */}
      <section className="py-20 bg-[#001B3D] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl font-bold mb-4"
              >
                25+ Years Of Professional Industry Experience
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-gray-300 mb-6"
              >
                Since our founding in 1999, we have grown from a small local contractor to one of the most respected construction companies in the region. Our success is built on a foundation of quality workmanship, innovative solutions, and unwavering commitment to our clients.
              </motion.p>
              <motion.ul 
                variants={staggerContainer}
                className="space-y-3"
              >
                {[
                  'Professional and certified construction team',
                  'Licensed, bonded, and fully insured',
                  'Comprehensive warranty on all projects',
                  '24/7 customer support and emergency services'
                ].map((text, index) => (
                  <motion.li 
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center group"
                  >
                    <CheckCircle className="text-[#FF6B35] mr-3 group-hover:scale-110 transition-transform duration-300" size={20} />
                    {text}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
              className="relative"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" 
                alt="Construction Team" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">Why Choose Us</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">What Makes Us Different</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Award className="text-[#FF6B35]" size={48} />,
                title: 'Award Winning',
                desc: 'Recognized industry leader with multiple awards for excellence in construction and project management.'
              },
              {
                icon: <Users className="text-[#FF6B35]" size={48} />,
                title: 'Expert Team',
                desc: 'Our team consists of highly skilled professionals with extensive experience in all aspects of construction.'
              },
              {
                icon: <CheckCircle className="text-[#FF6B35]" size={48} />,
                title: 'Quality Assurance',
                desc: 'Rigorous quality control processes ensure every project meets our exacting standards and client requirements.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="text-center p-6 hover:shadow-xl transition-all rounded-lg bg-gray-50"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center mb-4"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-[#001B3D] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats with Animated Counters */}
      <section className="py-16 bg-[#FF6B35] overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white"
          >
            {[
              { end: 300, suffix: '+', label: 'Projects Completed' },
            
              { end: 80, suffix: '+', label: 'Happy Clients' },
              { end: 50, suffix: '+', label: 'Expert Team' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide font-semibold">Our Team</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">Meet Our Experts</h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { name: 'John Anderson', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
              { name: 'Sarah Williams', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
              { name: 'Michael Chen', role: 'Chief Engineer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
              { name: 'Emily Davis', role: 'Architect', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-[#FF6B35]/20"
                  ></motion.div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#001B3D] mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



 <ScrollToTop />

    </div>
  )
}

export default About