import { lazy } from 'react';

import { ERoutes } from '../ENUM/Enum';

const Main = lazy(() => import('../pages/Main/Main'));
const Details = lazy(() => import('../pages/Details/Details'));
const AboutUs = lazy(() => import('../pages/AboutUs/AboutUs'));
const Blog = lazy(() => import('../pages/Blog/Blog'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const routeConfig = [
  { path: ERoutes.home, component: Main, exact: true },
  { path: ERoutes.details, component: Details, exact: true },
  { path: ERoutes.aboutUs, component: AboutUs, exact: true },
  { path: ERoutes.blog, component: Blog, exact: true },
  { path: ERoutes.contacts, component: Contacts, exact: true },
];
