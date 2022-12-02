import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { ListWrapperDetails } from './management-list-details/ListDetails'
import {ListWrapper} from './management-list/List'

const dataBreadcrumbs: Array<PageLink> = [
  {
    title: 'English Management',
    path: '/apps/english-management/english',
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

const EnglishPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='english-list'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>English list</PageTitle>
              <ListWrapper />
            </>
          }
        />
        <Route
          path='english-details'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>English Details list</PageTitle>
              <ListWrapperDetails />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/english-management/english-list' />} />
    </Routes>
  )
}

export default EnglishPage
