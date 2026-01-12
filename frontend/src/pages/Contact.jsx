import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0, 27, 61, 0.8), rgba(0, 27, 61, 0.8)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600')"
      }}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get In Touch With Our Team</p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 -mt-32 relative z-10">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#001B3D] mb-2">Phone</h3>
              <p className="text-gray-600">+1 (234) 567-8900</p>
              <p className="text-gray-600">+1 (234) 567-8901</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#001B3D] mb-2">Email</h3>
              <p className="text-gray-600">info@example.com</p>
              <p className="text-gray-600">support@example.com</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#001B3D] mb-2">Address</h3>
              <p className="text-gray-600">123 Construction Street</p>
              <p className="text-gray-600">City, State 12345</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-xl text-center hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-bold text-[#001B3D] mb-2">Working Hours</h3>
              <p className="text-gray-600">Mon - Fri: 8AM - 6PM</p>
              <p className="text-gray-600">Sat: 9AM - 4PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">Get In Touch</p>
                <h2 className="text-4xl font-bold text-[#001B3D] mb-4">Send Us A Message</h2>
                <p className="text-gray-600">
                  Have a question or need a quote? Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name*"
                    className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#FF6B35]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email*"
                    className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#FF6B35]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#FF6B35]"
                  />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject*"
                    className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#FF6B35]"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message*"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#FF6B35]"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="bg-[#FF6B35] text-white px-8 py-3 rounded hover:bg-[#ff5722] transition font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <div className="mb-8">
                <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">Our Location</p>
                <h2 className="text-4xl font-bold text-[#001B3D] mb-4">Visit Our Office</h2>
                <p className="text-gray-600 mb-6">
                  Stop by our office to discuss your project in person. We're always happy to meet with potential clients.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-300 h-96 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>

              {/* Additional Info */}
              <div className="bg-[#001B3D] text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">✓</span>
                    <span>24/7 Emergency Support Available</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">✓</span>
                    <span>Free Consultation and Estimates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">✓</span>
                    <span>Licensed and Insured Professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B35] mr-2">✓</span>
                    <span>Quality Workmanship Guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">FAQ</p>
            <h2 className="text-4xl font-bold text-[#001B3D]">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'How do I request a quote?',
                a: 'You can request a quote by filling out the contact form above, calling us directly, or visiting our office. We provide free estimates for all projects.'
              },
              {
                q: 'What areas do you serve?',
                a: 'We serve the entire metropolitan area and surrounding regions. Contact us to confirm if we service your specific location.'
              },
              {
                q: 'Are you licensed and insured?',
                a: 'Yes, we are fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers compensation coverage.'
              },
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary depending on scope and complexity. We provide detailed schedules during the planning phase and keep you updated throughout construction.'
              },
              {
                q: 'Do you offer warranties?',
                a: 'Yes, we stand behind our work with comprehensive warranties on both materials and workmanship.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition">
                <summary className="font-bold text-[#001B3D] cursor-pointer">
                  {faq.q}
                </summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Contact us today for a free consultation and see how we can help bring your vision to life.
          </p>
          <a
            href="tel:+12345678900"
            className="bg-[#001B3D] text-white px-8 py-3 rounded hover:bg-[#002447] transition font-medium inline-block"
          >
            Call Now: +1 (234) 567-8900
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
