import { Navigation } from './Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import {Loader} from './Loader';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div><Loader/></div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
