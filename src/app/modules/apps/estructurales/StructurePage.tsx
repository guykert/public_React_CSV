import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { ConfigurationYearListWrapper } from './configuracion-anios-list/ConfigurationYearList'
import { CompanyTypeListWrapper } from './empresa-management/management-list-type/CompanyTypeList'
import { CompanyListWrapper } from './empresa-management/management-list/CompanyList'
import { CountryListWrapper } from './pais-list/CountryList'

const dataBreadcrumbs: Array<PageLink> = [
  {
    title: 'Configuration Years Management',
    path: '/apps/configuration-years-management/configuration-years',
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

const StructurePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='configuration-years'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Configuration Years list</PageTitle>
              <ConfigurationYearListWrapper />
            </>
          }
        />
        <Route
          path='company-list'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Company list</PageTitle>
              <CompanyListWrapper />
            </>
          }
        />
        <Route
          path='company-type'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Company Type list</PageTitle>
              <CompanyTypeListWrapper/>
            </>
          }
        />
        <Route
          path='country'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Country list</PageTitle>
              <CountryListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/estructurales/configuration-years' />} />
    </Routes>
  )
}

export default StructurePage
