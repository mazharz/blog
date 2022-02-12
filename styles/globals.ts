import { createGlobalStyle } from "styled-components";

type TTheme = {
  color9: string;
  color8: string;
  color7: string;
  color6: string;
  color5: string;
  color4: string;
  color3: string;
  color2: string;
  color1: string;
};

export const theme: TTheme = {
  color9: "#f8f9fa",
  color8: "#e9ecef",
  color7: "#dee2e6",
  color6: "#ced4da",
  color5: "#adb5bd",
  color4: "#6c757d",
  color3: "#495057",
  color2: "#343a40",
  color1: "#212529",
};

export const GlobalStyles = createGlobalStyle<{ theme: TTheme }>`
* {
   box-sizing: border-box;
}

html,
body {
  background: ${({ theme }) => theme.color9};
  color: ${({ theme }) => theme.color1};
  padding: 0;
  margin: 0;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 400;
  font-style: normal;
}

* {
  box-sizing: border-box;
}

input, textarea, button {font-family: inherit}`;
