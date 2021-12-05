import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/auth-selector';
import s from './Style.module.css';

const Navigation = () => {
  const isAuth = useSelector(authSelectors.getIsAuth)
  return (
    <nav>
      <NavLink
        to="/"
        className={({isActive}) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>

      {isAuth && <NavLink
        to="/phonebook"
        className={({isActive}) => (isActive ? s.activeLink : s.link)}
      >
        Phonebook
      </NavLink>}
      {/* {isAuth ?
        <NavLink to="/phonebook"
          className={({ isActive }) =>
          (isActive ? s.activeLink : s.link)}
        >
          Phonebook
        </NavLink>
        : <NavLink to="/"
          className={({ isActive }) =>
            (isActive ? s.activeLink : s.link)}
        >
          Home
        </NavLink>} */}
    </nav>
  );
};

export default Navigation;