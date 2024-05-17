const defaultTheme = {
  cubicTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const MainTheme = {
  ...defaultTheme,

  colors: {
    // =========  Backgrounds

    gray: '#c0c0c0',
    overlayColor: '#e7e7e7',

    // =========  Fonts
    mainFontColor: '#121417',
    secondFontColor: '#8A8A89',
    blueColor: '#3470FF',
  },

  breakPoints: {
    mobileBreakPoint: '320px',
    tabletBreakPoint: '768px',
    desktopBreakPoint: '1200px',
  },
};
