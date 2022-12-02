import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { QueryStudentsListWrapper } from './prueba-alumno-list/QueryStudentsList'
import { QueryAxisTematicListWrapper } from './prueba-eje-tematico-list/QueryAxisTematicList'
import { QueryHabilityListWrapper } from './prueba-habilidad-list/QueryHabilityList'
import { QueryListWrapper } from './prueba-list/QueryList'
import { QueryPatternListWrapper } from './prueba-pauta-list/QueryPatternList'
import { QuerySubAxisTematicListWrapper } from './prueba-sub-eje-tematico-list/QuerySubAxisTematicList'
import { QueryTableComversionListWrapper } from './prueba-tabla-comversion-list/QueryTableComversionList'
import { QueryTableComversionDetailListWrapper } from './prueba-tabla-conversion-detalle-list/QueryTableComversionDetailList'
import { QueryTypeListWrapper } from './prueba-tipo-list/QueryTypeList'



const dataBreadcrumbs: Array<PageLink> = [
  {
    title: 'Query Type Management',
    path: '/apps/query-type-management/query-type',
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

const QueryPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='query-student'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Query Student list</PageTitle>
              <QueryStudentsListWrapper />
            </>
          }
        />
        <Route
          path='query-axis-tematic'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Query Axis Tematic list</PageTitle>
              <QueryAxisTematicListWrapper />
            </>
          }
        />
        <Route
          path='query-hability'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Query Hability list</PageTitle>
              <QueryHabilityListWrapper />
            </>
          }
        />
        <Route
          path='query-list'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Query list</PageTitle>
              <QueryListWrapper />
            </>
          }
        />
        <Route
          path='query-pattern'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Query Pattern list</PageTitle>
              <QueryPatternListWrapper />
            </>
          }
        />
        <Route
          path='query-sub-axis-tematic'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Query Sub Axis Tematic list</PageTitle>
              <QuerySubAxisTematicListWrapper />
            </>
          }
        />
        <Route
          path='query-table-comversion'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Query Table Comversion list</PageTitle>
              <QueryTableComversionListWrapper />
            </>
          }
        />
        <Route
          path='query-table-comversion-detail'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Query Table Comversion Detail list</PageTitle>
              <QueryTableComversionDetailListWrapper />
            </>
          }
        />
        <Route
          path='query-type'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Query Type list</PageTitle>
              <QueryTypeListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/prueba/query-student' />} />
    </Routes>
  )
}

export default QueryPage
