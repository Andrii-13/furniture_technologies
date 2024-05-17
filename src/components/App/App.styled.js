import styled from 'styled-components';

export const Container = styled.div`
  min-width: ${p => p.theme.breakPoints.mobileBreakPoint};
  max-width: 428px;
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: ${p => p.theme.breakPoints.tabletBreakPoint}) {
    max-width: ${p => p.theme.breakPoints.tabletBreakPoint};
  }

  @media screen and (min-width: ${p => p.theme.breakPoints.desktopBreakPoint}) {
    max-width: ${p => p.theme.breakPoints.desktopBreakPoint};
  }
`;
