import * as React from "react";

const Con1 = React.lazy(() => import('./components/con/Con1'));
const Con2 = React.lazy(() => import('./components/con/Con2'));
const Con3 = React.lazy(() => import('./components/con/Con3'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/con1', exact: true, name: '1', component: Con1 },
  { path: '/con2', name: '2', component: Con2 },
  { path: '/con3', name: '3', component: Con3 }
];

export default routes;
