import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from 'components/layout/Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <NavLink to={'/'} className={css.link}>
              <li>Home</li>
            </NavLink>

            <NavLink to={'/movies'} className={css.link}>
              <li>Movies</li>
            </NavLink>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
