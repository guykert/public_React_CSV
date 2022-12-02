import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { CourseLearningDetailsListWrapper } from './curso-aprender-management/course-learning-details/CourseLearningDetailsList'
import { CourseLearningListWrapper } from './curso-aprender-management/course-learning-list/CourseLearningList'
import { ProjectsListWrapper } from './projects-list/ProjectsList'

const dataBreadcrumbs: Array<PageLink> = [
  {
    title: 'Projects Management',
    path: '/apps/projects-management/projects',
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

const PersonalPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='projects'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Projects list</PageTitle>
              <ProjectsListWrapper />
            </>
          }
        />
        <Route
          path='course-lerning-details'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Course Lerning Details list</PageTitle>
              <CourseLearningDetailsListWrapper />
            </>
          }
        />
        <Route
          path='course-lerning-list'
          element={
            <>
              <PageTitle breadcrumbs={dataBreadcrumbs}>Course Lerning list</PageTitle>
              <CourseLearningListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/personal/projects' />} />
    </Routes>
  )
}

export default PersonalPage
