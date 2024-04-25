import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog</NavLink>
        <NavLink to="/servises">Servises</NavLink>
      </nav>
    </>
  );
};
