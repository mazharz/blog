import styled from "styled-components";
import { remByPx } from "@/Styles/globals";

export const LinkAnchor = styled.a<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.accent : theme.color5)};
  :hover {
    color: ${({ theme, isActive }) => (isActive ? theme.accent : theme.color4)};
  }
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
  text-decoration: ${({ isActive }) => (isActive ? "none" : "underline")};
  transition: color 0.3s ease-in-out;
`;

export const ButtonAnchor = styled.a<{ isActive: boolean }>`
  display: inline-block;
  color: ${({ theme, isActive }) => (isActive ? theme.color4 : theme.color5)};
  :hover {
    color: ${({ theme }) => theme.color4};
    border: ${({ theme }) => `${remByPx[2]} solid ${theme.color5}`};
  }
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
  border: ${({ theme, isActive }) =>
    isActive ? "none" : `${remByPx[2]} solid ${theme.color7}`};
  border-radius: ${remByPx[50]};
  text-decoration: "none";
  transition: color 0.3s ease-in-out, border 0.3s ease-in-out;
  padding: ${remByPx[8]} ${remByPx[20]};
`;
