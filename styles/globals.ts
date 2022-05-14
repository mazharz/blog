import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  color9: "#f8f9fa",
  color8: "#e9ecef",
  color7: "#dee2e6",
  color6: "#ced4da",
  color5: "#adb5bd",
  color4: "#6c757d",
  color3: "#495057",
  color2: "#343a40",
  color1: "#212529",
  accent: "#ed0f93",
};

export const screenSize = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tabletS: "500px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${screenSize.mobileS})`,
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(min-width: ${screenSize.mobileL})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  laptopL: `(min-width: ${screenSize.laptopL})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  desktopL: `(min-width: ${screenSize.desktop})`,
};

export const remByPx = {
  1: "0.0625rem",
  2: "0.125rem",
  4: "0.25rem",
  6: "0.375rem",
  8: "0.5rem",
  10: "0.625rem",
  12: "0.75rem",
  14: "0.875rem",
  16: "1rem",
  18: "1.125rem",
  20: "1.25rem",
  22: "1.375rem",
  24: "1.5rem",
  26: "1.625rem",
  28: "1.75rem",
  30: "1.875rem",
  50: "3.125rem",
};

export const GlobalStyles = createGlobalStyle<{ theme: typeof theme }>`
html,
body {
  background: ${({ theme }) => theme.color9};
  color: ${({ theme }) => theme.color5};
  font-weight: 500;
  padding: 0;
  margin: 0;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  min-height: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}

*::selection {
  color: ${({ theme }) => theme.accent};
  background: ${({ theme }) => theme.color8}
}

input, textarea, button {font-family: inherit}

#__next {
  height: 100%;
}
`;

export const CenteredFullHeightContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
