import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrap = styled.header`
  background-color: ${p => p.theme.colors.gray};
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  align-items: center;
`;

export const Link = styled(NavLink)``;
