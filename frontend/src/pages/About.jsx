import { CheckCircle, Award, Users, Target, Eye } from 'lucide-react'

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0, 27, 61, 0.8), rgba(0, 27, 61, 0.8)), url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600')"
      }}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">Building Excellence Since 1999</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">About Emuo</p>
              <h2 className="text-4xl font-bold text-[#001B3D] mb-4">
                World's Largest And Trusted Construction Company
              </h2>
              <p className="text-gray-600 mb-4">
                With over 25 years of experience in the construction industry, we have established ourselves as leaders in delivering quality projects on time and within budget. Our commitment to excellence and customer satisfaction sets us apart.
              </p>
              <p className="text-gray-600 mb-6">
                We specialize in residential, commercial, and industrial construction projects. Our team of skilled professionals uses the latest technology and construction methods to ensure superior results.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="text-[#FF6B35] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Expert team with decades of combined experience in construction</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#FF6B35] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-600">State-of-the-art equipment and modern construction techniques</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#FF6B35] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Commitment to safety, quality, and environmental sustainability</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-[#FF6B35] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-600">Comprehensive project management from concept to completion</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800" 
                alt="Construction Site" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#FF6B35] text-white p-8 rounded-lg shadow-lg">
                <div className="text-5xl font-bold mb-1">500+</div>
                <div className="text-sm">Completed Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="text-[#FF6B35] mr-3" size={40} />
                <h3 className="text-2xl font-bold text-[#001B3D]">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional construction services that exceed client expectations while maintaining the highest standards of quality, safety, and sustainability. We strive to build lasting relationships with our clients through trust, integrity, and outstanding results.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Eye className="text-[#FF6B35] mr-3" size={40} />
                <h3 className="text-2xl font-bold text-[#001B3D]">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and respected construction company, recognized for innovation, quality craftsmanship, and exceptional customer service. We envision a future where we continue to shape skylines and communities while promoting sustainable building practices.
              </p>
            </div>
          </div>
        </div>
      </section>

    


      {/* Experience Section */}
      <section className="py-20 bg-[#001B3D] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">25+ Years Of Professional Industry Experience</h2>
              <p className="text-gray-300 mb-6">
                Since our founding in 1999, we have grown from a small local contractor to one of the most respected construction companies in the region. Our success is built on a foundation of quality workmanship, innovative solutions, and unwavering commitment to our clients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-[#FF6B35] mr-3" size={20} />
                  Professional and certified construction team
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#FF6B35] mr-3" size={20} />
                  Licensed, bonded, and fully insured
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#FF6B35] mr-3" size={20} />
                  Comprehensive warranty on all projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-[#FF6B35] mr-3" size={20} />
                  24/7 customer support and emergency services
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800" 
                alt="Construction Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

        {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">Why Choose Us</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">What Makes Us Different</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={index} className="text-center p-6 hover:shadow-xl transition-shadow rounded-lg">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#001B3D] mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#FF6B35]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-white/90">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">25+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">350+</div>
              <div className="text-white/90">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-white/90">Expert Team</div>
            </div>
          </div>
        </div>
      </section>


      
      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">Our Team</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">Meet Our Experts</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: 'John Anderson', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400' },
              { name: 'Sarah Williams', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400' },
              { name: 'Michael Chen', role: 'Chief Engineer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400' },
              { name: 'Emily Davis', role: 'Architect', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400' }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#FF6B35]/0 group-hover:bg-[#FF6B35]/20 transition-colors duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#001B3D] mb-1">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




    </div>
  )
}

export default About
