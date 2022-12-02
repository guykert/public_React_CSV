import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import { PermissionListWrapper } from './permission-list/PermissionList'
import { RoleListWrapper } from './role-list/RoleList'
import { SexListWrapper } from './sex-list/SexList'
import { StudentTypeListWrapper } from './tipo-alumno-list/StudentTypeList'
import {UsersListWrapper} from './users-list/UsersList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'User Management',
    path: '/apps/user-management/users',
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

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Users list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
        <Route
          path='student-type'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Student Type list</PageTitle>
              <StudentTypeListWrapper />
            </>
          }
        />
        <Route
          path='sex'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Sex list</PageTitle>
              <SexListWrapper />
            </>
          }
        />
        <Route
          path='role'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Role list</PageTitle>
              <RoleListWrapper />
            </>
          }
        />
        <Route
          path='permission'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Permission list</PageTitle>
              <PermissionListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/users/users' />} />
    </Routes>
  )
}

export default UsersPage
