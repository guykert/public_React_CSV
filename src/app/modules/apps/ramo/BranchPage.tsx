import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { AsignaturasCurricularesListWrapper } from './asignaturas-curriculares-list/AsignaturasCurricularesList'
import { BranchListWrapper } from './ramo-list/BranchList'

const dataBreadcrumbs: Array<PageLink> = [
  {
    title: 'Branch Management',
    path: '/apps/branch-management/branch',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const BranchPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='branch'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Branch list</PageTitle>
              <BranchListWrapper />
            </>
          }
        />
        <Route
          path='asignaturas-curriculares'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Asignaturas Curriculares list</PageTitle>
              <AsignaturasCurricularesListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/branch/branch' />} />
    </Routes>
  )
}

export default BranchPage
