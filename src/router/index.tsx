import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'
import DashboardPage from '~/pages/Dashboard'
import NewEmployeePage from '~/pages/NewEmployee'

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter>
        <Routes>
          <Route path={routes.dashboard} element={<DashboardPage />} />
          <Route path={routes.newUser} element={<NewEmployeePage />} />
          <Route path='*' element={<Navigate to={routes.dashboard} />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default Router
