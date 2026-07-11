import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Personas from './pages/Personas'
import CertificationDetail from './pages/CertificationDetail'
import Equipos1 from './pages/Equipos1'
import Conozcanos from './pages/Conozcanos'
import Politicas from './pages/Politicas'
import Quejas from './pages/Quejas'
import ConsultaCertificadosPersonas from './pages/ConsultaCertificadosPersonas'
import ConsultaCertificadosInspecciones from './pages/ConsultaCertificadosInspecciones'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/personas/:slug" element={<CertificationDetail />} />
          <Route path="/equipos1" element={<Equipos1 />} />
          <Route path="/conozcanos" element={<Conozcanos />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/quejas" element={<Quejas />} />
          <Route path="/consulta-certificados/personas" element={<ConsultaCertificadosPersonas />} />
          <Route path="/consulta-certificados/inspecciones" element={<ConsultaCertificadosInspecciones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
