import { useState } from 'react'
import { X } from 'lucide-react'

import img1 from "../assets/fourth/1.jpg"
import img2 from "../assets/fourth/2.jpg"
import img3 from "../assets/fourth/3.jpg"
import img4 from "../assets/fourth/4.jpg"
import img5 from "../assets/fourth/5.jpg"
import img6 from "../assets/fourth/6.jpg"
import img7 from "../assets/fourth/7.jpg"


import img11 from "../assets/fourth/11.jpg"
import img12 from "../assets/fourth/12.jpg"
import img13 from "../assets/fourth/13.jpg"
import img14 from "../assets/fourth/14.jpg"


import img21 from "../assets/fourth/21.jpg"
import img22 from "../assets/fourth/22.jpg"
import img23 from "../assets/fourth/23.jpg"
import img24 from "../assets/fourth/24.jpg"
import img25 from "../assets/fourth/25.jpg"
import img26 from "../assets/fourth/26.jpg"
import img27 from "../assets/fourth/27.jpg"
import img28 from "../assets/fourth/28.jpg"
import img29 from "../assets/fourth/29.jpg"


import img31 from "../assets/fourth/31.png"
import img32 from "../assets/fourth/32.png"
import img33 from "../assets/fourth/33.png"
import img34 from "../assets/fourth/34.png"
import img35 from "../assets/fourth/35.png"
import img36 from "../assets/fourth/36.png"
import img37 from "../assets/fourth/37.png"
import img38 from "../assets/fourth/38.png"
import img39 from "../assets/fourth/39.png"
import img40 from "../assets/fourth/40.png"
import img41 from "../assets/fourth/41.png"







const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', '3D Modelling', 'Assembly Drawings', 'Single Part Drawings', 'Erection Drawings']

  const projects = [
    {
  id: 41,
  title: 'Industrial steel structure model',
  category: '3D Modelling',
  img: img31,
  desc: 'Three-dimensional model of an industrial steel structure showing primary framing, secondary members, and connection geometry.'
},
{
  id: 42,
  title: 'Warehouse roof framing model',
  category: '3D Modelling',
  img: img32,
  desc: '3D model of warehouse roof framing including purlins, rafters, and column layout for coordination and analysis.'
},
{
  id: 43,
  title: 'Canopy steel framework',
  category: '3D Modelling',
  img: img33,
  desc: 'Three-dimensional steel canopy model illustrating curved members, support columns, and connection points.'
},
{
  id: 44,
  title: 'Pipe rack steel model',
  category: '3D Modelling',
  img: img34,
  desc: '3D model of a pipe rack structure showing beam framing, column supports, and equipment clearances.'
},
{
  id: 45,
  title: 'Commercial building steel model',
  category: '3D Modelling',
  img: img35,
  desc: 'Detailed steel model of a commercial building including floor framing, vertical bracing, and core structures.'
},
{
  id: 46,
  title: 'Platform and access structure',
  category: '3D Modelling',
  img: img36,
  desc: '3D model of steel platforms and access structures showing stairs, handrails, and support framing.'
},
{
  id: 47,
  title: 'Multi-level steel structure',
  category: '3D Modelling',
  img: img37,
  desc: 'Three-dimensional model representing a multi-level steel structure with coordinated framing and bracing systems.'
},
{
  id: 48,
  title: 'Process equipment support frame',
  category: '3D Modelling',
  img: img38,
  desc: 'Steel support frame model developed for industrial process equipment, including load paths and connection details.'
},
{
  id: 49,
  title: 'Structural steel tower model',
  category: '3D Modelling',
  img: img39,
  desc: '3D steel tower model showing column framing, bracing arrangements, and platform levels.'
},
{
  id: 50,
  title: 'Staircase and landing model',
  category: '3D Modelling',
  img: img40,
  desc: 'Three-dimensional staircase model with stringers, landings, handrails, and supporting steel members.'
},
{
  id: 51,
  title: 'Complex steel framing system',
  category: '3D Modelling',
  img: img41,
  desc: 'Detailed 3D model of a complex steel framing system developed for coordination, clash detection, and fabrication.'
},

    {
  id: 12,
  title: 'Home extension',
  category: 'Erection Drawings',
  img: img1,
  desc: 'Erection drawings prepared for residential steel extensions, including beam layouts, column positions, and installation references.'
},
{
  id: 13,
  title: 'Residential steel framing',
  category: 'Erection Drawings',
  img: img2,
  desc: 'Detailed steel framing erection drawings showing member identification, connection locations, and on-site assembly guidance.'
},
{
  id: 14,
  title: 'Commercial building structure',
  category: 'Erection Drawings',
  img: img3,
  desc: 'Erection drawings for commercial buildings with clear framing plans, elevations, and coordinated structural details.'
},
{
  id: 15,
  title: 'Industrial shed structure',
  category: 'Erection Drawings',
  img: img4,
  desc: 'Comprehensive erection drawings for industrial sheds including column grids, bracing systems, and roof framing layouts.'
},
{
  id: 16,
  title: 'Multi-storey steel frame',
  category: 'Erection Drawings',
  img: img5,
  desc: 'Multi-level erection drawings illustrating floor-wise steel assembly, member sequencing, and alignment details.'
},
{
  id: 17,
  title: 'Portal frame structure',
  category: 'Erection Drawings',
  img: img6,
  desc: 'Portal frame erection drawings with primary framing details, connection references, and erection notes for site teams.'
},
{
  id: 18,
  title: 'Structural steel platform',
  category: 'Erection Drawings',
  img: img7,
  desc: 'Erection drawings for steel platforms including beam framing, support details, and installation clearances.'
},

{
  id: 21,
  title: 'Base plate detail',
  category: 'Single Part Drawings',
  img: img11,
  desc: 'Single part drawing of a steel base plate showing bolt hole layout, edge distances, and fabrication dimensions.'
},
{
  id: 22,
  title: 'Cleat angle component',
  category: 'Single Part Drawings',
  img: img12,
  desc: 'Detailed drawing of a cleat angle with slot dimensions, hole spacing, and material specifications for fabrication.'
},
{
  id: 23,
  title: 'Gusset plate detail',
  category: 'Single Part Drawings',
  img: img13,
  desc: 'Single part gusset plate drawing including bolt patterns, plate geometry, and connection reference details.'
},
{
  id: 24,
  title: 'Beam end plate',
  category: 'Single Part Drawings',
  img: img14,
  desc: 'Fabrication drawing of a beam end plate showing hole arrangement, plate thickness, and welding requirements.'
},

{
  id: 31,
  title: 'Beam assembly drawing',
  category: 'Assembly Drawings',
  img: img21,
  desc: 'Assembly drawing showing beam fabrication details, bolt connections, member marks, and overall assembly dimensions.'
},
{
  id: 32,
  title: 'Column assembly detail',
  category: 'Assembly Drawings',
  img: img22,
  desc: 'Structural column assembly drawing including splice details, base plate connections, and bolt arrangements.'
},
{
  id: 33,
  title: 'Bracing assembly',
  category: 'Assembly Drawings',
  img: img23,
  desc: 'Assembly drawing illustrating steel bracing members, gusset plate connections, and installation references.'
},
{
  id: 34,
  title: 'Beam to column connection',
  category: 'Assembly Drawings',
  img: img24,
  desc: 'Detailed beam-to-column assembly drawing with connection geometry, bolt layout, and member orientation.'
},
{
  id: 35,
  title: 'Roof framing assembly',
  category: 'Assembly Drawings',
  img: img25,
  desc: 'Roof framing assembly drawing showing primary beams, secondary members, and coordinated connection details.'
},
{
  id: 36,
  title: 'Portal frame assembly',
  category: 'Assembly Drawings',
  img: img26,
  desc: 'Portal frame assembly drawing including columns, rafters, knee joints, and erection reference dimensions.'
},
{
  id: 37,
  title: 'Steel girder assembly',
  category: 'Assembly Drawings',
  img: img27,
  desc: 'Assembly drawing of a steel girder with stiffeners, splice locations, and fabrication notes.'
},
{
  id: 38,
  title: 'Platform structure assembly',
  category: 'Assembly Drawings',
  img: img28,
  desc: 'Assembly drawing for steel platform structures showing beam layout, support framing, and connection details.'
},
{
  id: 39,
  title: 'Staircase steel assembly',
  category: 'Assembly Drawings',
  img: img29,
  desc: 'Steel staircase assembly drawing including stringers, treads, handrail supports, and fixing details.'
}



  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div>
      {/* Page Header */}
      <section className="relative h-[300px] bg-cover bg-center" style={{
        backgroundImage: "linear-gradient(rgba(0, 27, 61, 0.8), rgba(0, 27, 61, 0.8)), url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600')"
      }}>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Our Gallery</h1>
            <p className="text-xl">Showcasing Our Best Work</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-[#FF6B35] mb-2 text-sm uppercase tracking-wide">Portfolio</p>
            <h2 className="text-4xl font-bold text-[#001B3D] mb-4">Our Completed Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful construction projects across residential, commercial, and industrial sectors.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(project)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#FF6B35] text-sm font-medium mb-2">{project.category}</span>
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#FF6B35] transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="bg-white p-6 rounded-b-lg">
              <span className="text-[#FF6B35] text-sm font-medium">{selectedImage.category}</span>
              <h3 className="text-2xl font-bold text-[#001B3D] mt-2 mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}

  

      {/* CTA Section */}
      <section className="py-20 bg-[#FF6B35]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Want to See Your Project Here?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can bring your construction vision to life.
          </p>
          <a
            href="/contact"
            className="bg-[#001B3D] text-white px-8 py-3 rounded hover:bg-[#002447] transition font-medium inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}

export default Gallery
