/* eslint-disable arrow-body-style */
// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "@components/shared/Loader/Loader";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
// Lazy-loaded Components
const Login = lazy(() => import("@components/auth/Login"));
const SignIn = lazy(() => import("@components/auth/SignIn"));
const Dashboard = lazy(() => import("@components/dashboard/Dashboard"));
const NotFound = lazy(() => import("@components/shared/NotFound/NotFound"));
const User = lazy(() => import("@components/users/User"));
const StudentTaskBoard = lazy(() =>
  import("@components/pages/student-task-board/StudentTaskBoard")
);
// account page components start
const StudentProfileLayout = lazy(() =>
  import("@components/pages/account/StudentProfileLayout")
);
const StudentProfilePage = lazy(() =>
  import("@components/pages/account/profile/StudentProfilePage")
);
const StudentPhotoPage = lazy(() =>
  import("@components/pages/account/photo/StudentPhotoPage")
);
// account page components end
const StudentQNA = lazy(() =>
  import("@components/pages/student-qna/StudentQNA")
);

const routeMapper = () => {
  return [
    {
      path: "/login",
      element: (
        <PublicRoute>
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        </PublicRoute>
      ),
      exact: true,
    },
    {
      path: "/signin",
      element: (
        <PublicRoute>
          <Suspense fallback={<Loader />}>
            <SignIn />
          </Suspense>
        </PublicRoute>
      ),
      exact: true,
    },
    {
      path: "/",
      element: (
        <PrivateRoute>
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        </PrivateRoute>
      ),
      exact: true,
    },
    {
      path: "/student",
      element: (
        <PrivateRoute>
          <Outlet />
        </PrivateRoute>
      ),
      exact: true,
      children: [
        {
          index: true,
          exact: true,
          element: (
            <Suspense fallback={<Loader />}>
              <User />
            </Suspense>
          ),
        },
        {
          path: "student-task-board",
          exact: true,
          element: (
            <Suspense fallback={<Loader />}>
              <StudentTaskBoard />
            </Suspense>
          ),
        },
        {
          path: "student-qna",
          exact: true,
          element: (
            <Suspense fallback={<Loader />}>
              <StudentQNA />
            </Suspense>
          ),
        },
        {
          path: "account",
          exact: true,
          element: (
            <Suspense fallback={<Loader />}>
              <div>
                <StudentProfileLayout>
                  <Outlet />
                </StudentProfileLayout>
              </div>
            </Suspense>
          ),
          children: [
            {
              index: true,
              exact: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <User />
                </Suspense>
              ),
            },
            {
              path: "profile",
              exact: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <StudentProfilePage />
                </Suspense>
              ),
            },
            {
              path: "photo",
              exact: true,
              element: (
                <Suspense fallback={<Loader />}>
                  <StudentPhotoPage />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: ":action/:id",
          exact: true,
          element: (
            <Suspense fallback={<Loader />}>
              <User />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/user",
      element: (
        <PrivateRoute>
          <Outlet />
        </PrivateRoute>
      ),
      exact: true,
      children: [
        {
          index: true,
          exact: true,
          element: (
            <Suspense fallback={<Loader />}>
              <User />
            </Suspense>
          ),
        },
        {
          path: ":action/:id",
          exact: true,
          element: (
            <Suspense fallback={<Loader />}>
              <User />
            </Suspense>
          ),
        },
      ],
    },
    {
      // Invalid Route
      path: "*",
      element: (
        <PrivateRoute>
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        </PrivateRoute>
      ),
    },
  ];
};

export default routeMapper;
