import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import routes from './routes'
import DashboardPage from '~/pages/Dashboard'
import NewUserPage from '~/pages/NewUser'

const Router = () => {
  return (
    <div style={{ marginTop: 64 }}>
      <HashRouter>
        <Routes>
          <Route path={routes.dashboard} element={<DashboardPage />} />
          <Route path={routes.newUser} element={<NewUserPage />} />
          <Route path='*' element={<Navigate to={routes.dashboard} />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default Router
