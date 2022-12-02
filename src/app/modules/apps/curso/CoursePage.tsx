import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { CourseListWrapper } from './course-list/CourseList'
import { LeterListWrapper } from './letra-list/LeterList'
import { LevelListWrapper } from './nivel-list/LevelList'


const dataBreadcrumbs: Array<PageLink> = [
  {
    title: 'Level Management',
    path: '/apps/level-management/level',
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

const CoursePage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='course'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Course list</PageTitle>
              <CourseListWrapper />
            </>
          }
        />
        <Route
          path='leter'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Leter list</PageTitle>
              <LeterListWrapper />
            </>
          }
        />
        <Route
          path='level'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Level list</PageTitle>
              <LevelListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/course/course' />} />
    </Routes>
  )
}

export default CoursePage
