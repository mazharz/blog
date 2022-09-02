import styled from "styled-components";
import { remByPx, screenSize, theme } from "@/Styles/globals";

export const BackButton = styled.div`
  margin-top: ${remByPx[18]};
  font-size: ${remByPx[22]};
  font-weight: 500;
  line-height: ${remByPx[18]};
`;

export const DiaryHeaderText = styled.h1`
  margin: 0 auto ${remByPx[18]};
  padding: ${remByPx[18]} 0;
  border-bottom: ${({ theme }) => `${remByPx[2]} solid ${theme.color8}`};
  max-width: ${screenSize.tabletS};
  color: ${({ theme }) => theme.color4};
`;

export const DiaryTextContainer = styled.div`
  margin: 0 auto ${remByPx[50]};
  max-width: ${screenSize.tabletS};
  color: ${({ theme }) => theme.color4};
  font-weight: 400;
  line-height: ${remByPx[22]};
  counter-reset: h2counter;
  h2 {
    counter-reset: h3counter;
  }
  h2:before {
    content: counter(h2counter) ".  ";
    counter-increment: h2counter;
  }
  h3:before {
    content: counter(h2counter) "." counter(h3counter) "  ";
    counter-increment: h3counter;
  }
  li {
    margin: ${remByPx[8]} 0;
  }
  a {
    color: ${({ theme }) => theme.color5};
    :hover {
      color: ${({ theme }) => theme.color4};
    }
    cursor: "pointer";
    text-decoration: "underline";
    transition: color 0.3s ease-in-out;
    font-weight: 500;
  }
  pre {
    max-width: 100%;
    overflow-x: auto;
  }
  *:not(pre) code {
    background-color: ${theme.color3};
    color: ${theme.color7};
    padding: 0 0.3rem;
    border-radius: ${remByPx[8]};
  }
`;
