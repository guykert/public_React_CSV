import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { ListWrapperType } from './management-list-type/ListType'
import {ListWrapper} from './management-list/List'

const dataBreadcrumbs: Array<PageLink> = [
  {
    title: 'Menu Management',
    path: '/apps/menu-management/menu',
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

const MenuPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='menu-list'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Menu list</PageTitle>
              <ListWrapper />
            </>
          }
        />
        <Route
          path='menu-type'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Menu Type list</PageTitle>
              <ListWrapperType />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/menu-management/menu' />} />
    </Routes>
  )
}

export default MenuPage
