import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '@/components'
import routes from '@/routes'
import { LocalPage } from '@/pages/index'

function App() {
  return (
    <>
      <div className="container content-center text-center absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>

      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />,
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/local/:localName" element={<LocalPage />} />
      </Routes>
    </>
  )
}

export default App
