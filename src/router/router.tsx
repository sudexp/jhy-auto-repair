import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Layout from 'layout';
import Root from 'pages/Root';
import NotFound from 'pages/NotFound';
import About from 'pages/About';
import Contacts from 'pages/Contacts';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} errorElement={<NotFound />}>
      <Route index element={<Root />} />
      <Route path='about' element={<About />} />
      <Route path='contacts' element={<Contacts />} />
    </Route>
  )
);
