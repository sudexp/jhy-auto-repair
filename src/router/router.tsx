import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from 'layout';
import NotFound from 'pages/NotFound';
import Root from 'pages/Root';
import Contacts from 'pages/Contacts';
import Services from 'pages/Services/Services';
import Wheels from 'pages/Wheels';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<NotFound />}>
      <Route index element={<Root />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='services' element={<Services />} />
      <Route path='wheels' element={<Wheels />} />
    </Route>
  )
);
