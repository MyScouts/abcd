import React, { Suspense, lazy } from 'react';
import { Switch, Redirect, Route, useLocation } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import { BASE_URL } from './config/constant';
import { PUBLIC_ROUTE } from './route.constant';
import GuesLayout from './layouts/GuesLayout';


const Dashboard = lazy(() => import('./views/dashboard/DashDefault'));


export const renderRoutes = (routes = []) => (
  // <Suspense fallback={<Loader />}>
  <Suspense fallback={<Loader />}>
    <Switch>
        {publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} exact={route.exact}>
            <route.component />
          </Route>
        ))}

      <AdminLayout>
        {privateRouters.map((route, i) => (
          <PrivateRoute key={i} path={route.path} exact={route.exact} >
            <route.component />
          </PrivateRoute>
        ))}
      </AdminLayout>
    </Switch>
  </Suspense>
);


function PrivateRoute({ children, ...rest }) {
  let location = useLocation();
  const isLoggedIn = false;
  if (isLoggedIn) return <Route {...rest}>{children}</Route>;
  return (
    <Redirect
      to={{
        pathname: PUBLIC_ROUTE.SIGN_IN,
        state: { from: location },
      }}
    />
  );

}


const publicRoutes = [
  {
    exact: true,
    path: PUBLIC_ROUTE.SIGN_IN,
    component: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: true,
    path: PUBLIC_ROUTE.SIGN_UP,
    component: lazy(() => import('./views/auth/signup/SignUp1'))
  },
];



const privateRouters = [
  {
    exact: true,
    path: '/dashboard',
    component: lazy(() => import('./views/dashboard/DashDefault'))
  },
  {
    exact: true,
    path: '/basic/button',
    component: lazy(() => import('./views/ui-elements/basic/BasicButton'))
  },
  {
    exact: true,
    path: '/basic/badges',
    component: lazy(() => import('./views/ui-elements/basic/BasicBadges'))
  },
  {
    exact: true,
    path: '/basic/breadcrumb',
    component: lazy(() => import('./views/ui-elements/basic/BasicBreadcrumb'))
  },
  {
    exact: true,
    path: '/basic/pagination',
    component: lazy(() => import('./views/ui-elements/basic/BasicPagination'))
  },
  {
    exact: true,
    path: '/basic/collapse',
    component: lazy(() => import('./views/ui-elements/basic/BasicCollapse'))
  },
  {
    exact: true,
    path: '/basic/tabs-pills',
    component: lazy(() => import('./views/ui-elements/basic/BasicTabsPills'))
  },
  {
    exact: true,
    path: '/basic/typography',
    component: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
  },
  {
    exact: true,
    path: '/forms/form-basic',
    component: lazy(() => import('./views/forms/FormsElements'))
  },
  {
    exact: true,
    path: '/tables/bootstrap',
    component: lazy(() => import('./views/tables/BootstrapTable'))
  },
  {
    exact: true,
    path: '/charts/nvd3',
    component: lazy(() => import('./views/charts/nvd3-chart'))
  },
  {
    exact: true,
    path: '/maps/google-map',
    component: lazy(() => import('./views/maps/GoogleMaps'))
  },
  {
    exact: true,
    path: '/sample-page',
    component: lazy(() => import('./views/extra/SamplePage'))
  },
  {
    path: '*',
    exact: true,
    component: () => <Redirect to={BASE_URL} />
  }
]



const routes = [

  {
    path: '*',
    layout: AdminLayout,
    routes: [

    ]
  }
];

export default routes;
