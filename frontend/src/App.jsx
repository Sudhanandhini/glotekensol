import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import ConnectionDesign from './pages/Connectiondesign'
import StructuralSteelDesign from './pages/StructuralSteelDesign'
import StructuralSteelDetailing from './pages/StructuralSteelDetailing'
import StructuralSteelBIM from './pages/StructuralSteelBIM'
import Structural3DModeling from './pages/Structural3DModeling'
import EstimateCosting from './pages/EstimateCosting'
import PointClouds from './pages/PointClouds'
import RebarDetailing from './pages/RebarDetailing'
import RebarReinforcement3DModelling from './pages/RebarReinforcement3DModelling'
import RebarQuantityEstimation from './pages/RebarQuantityEstimation'
import CivilConstructionDesigning from './pages/CivilConstructionDesigning'
import EstimationAndCosting from './pages/EstimationAndCosting'
import CivilConstructionServices from './pages/CivilConstructionServices'
import RenovationWorks from './pages/RenovationWorks'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <Router basename='/glotekensol/'>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connection-design" element={<ConnectionDesign />} />
<Route path="/design-analysis" element={<StructuralSteelDesign />} />
<Route path="/structural-steel-detailing" element={<StructuralSteelDetailing />} />
<Route path="/steel-bim-services" element={<StructuralSteelBIM />} />
<Route path="/steel-3d-modelling" element={<Structural3DModeling />} />
<Route path="/estimate-costing" element={<EstimateCosting />} />
<Route path="/steel-point-cloud" element={<PointClouds />} />
<Route path="/rebar-detailing" element={<RebarDetailing />} />
<Route path="/rebar-estimation" element={<RebarQuantityEstimation />} />
<Route path="/rebar-3d-modelling" element={<RebarReinforcement3DModelling />} />
<Route path="/civil-estimation" element={<EstimationAndCosting />} />
<Route path="/civil-construction-design" element={<CivilConstructionDesigning />} />
<Route path="/civil-services" element={<CivilConstructionServices />} />
<Route path="/civil-renovation" element={<RenovationWorks />} />

          </Routes>
        </main>
        <Footer />
          <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
