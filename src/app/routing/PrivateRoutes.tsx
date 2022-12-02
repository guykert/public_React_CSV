import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import UsersPage from '../modules/apps/auth-usuario/UsersPage'

import PersonalPage from '../modules/apps/personal/PersonalPage'
import StructurePage from '../modules/apps/estructurales/StructurePage'
import HoraryPage from '../modules/apps/horario/HoraryPage'
import EnglishPage from '../modules/apps/ingles-management/EnglishPage'
import MenuPage from '../modules/apps/menu-management/MenuPage'
import CoursePage from '../modules/apps/curso/CoursePage'
import QueryPage from '../modules/apps/prueba/QueryPage'
import BranchPage from '../modules/apps/ramo/BranchPage'


const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />

        <Route
          path='apps/users/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />


        <Route
          path='apps/personal/*'
          element={
            <SuspensedView>
              <PersonalPage />
            </SuspensedView>
          }
        />

        <Route
          path='apps/branch/*'
          element={
            <SuspensedView>
              <BranchPage />
            </SuspensedView>
          }
        />

        <Route
          path='apps/estructurales/*'
          element={
            <SuspensedView>
              <StructurePage />
            </SuspensedView>
          }
        />

        <Route
          path='apps/horary/*'
          element={
            <SuspensedView>
              <HoraryPage />
            </SuspensedView>
          }
        />



        <Route
          path='apps/english-management/*'
          element={
            <SuspensedView>
              <EnglishPage />
            </SuspensedView>
          }
        />


        <Route
          path='apps/course/*'
          element={
            <SuspensedView>
              <CoursePage />
            </SuspensedView>
          }
        />

        <Route
          path='apps/menu-management/*'
          element={
            <SuspensedView>
              <MenuPage />
            </SuspensedView>
          }
        />


        <Route
          path='apps/prueba/*'
          element={
            <SuspensedView>
              <QueryPage />
            </SuspensedView>
          }
        />




        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
