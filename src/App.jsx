import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import Beer from './pages/Beer'
import { Route, Routes } from 'react-router-dom'
import { routes } from './util/routes'


function App() {
  return (
    <>
      <Navbar />
      <h1>Buscá tranquilx, la mejor birrita está acá 🍺</h1>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.contact} element={<Contacto />} />
        <Route path="/beer/:id" element={<Beer />} />
        <Route
          path={routes.notFound}
          element={<h1>Error 404 - Birrita not Found 😥</h1>}
        />
      </Routes>
    </>
  )
}

export default App
