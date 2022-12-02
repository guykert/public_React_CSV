import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { DayListWrapper } from './dia-list/DayList'

const dataBreadcrumbs: Array<PageLink> = [
  {
    title: 'Day Management',
    path: '/apps/day-management/day',
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

const HoraryPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='day'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Day list</PageTitle>
              <DayListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/horary/day' />} />
    </Routes>
  )
}

export default HoraryPage
