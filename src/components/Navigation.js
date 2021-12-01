import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/auth-selector';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5',
  },
};

const Navigation = () => {
  const isAuth = useSelector(authSelectors.getIsAuth)
  return (
    <nav>
      <NavLink
        to="/"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Home
      </NavLink>

      {isAuth && <NavLink
        to="/phonebook"
        style={styles.link}
        activestyle={styles.activeLink}
      >
        Phonebook
      </NavLink>}
    </nav>
  );
};

export default Navigation;