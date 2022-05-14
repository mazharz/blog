import styled from "styled-components";
import { device } from "@/Styles/globals";

export const Container = styled.footer`
  height: 3.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme.color8};
`;

export const Name = styled.div`
  font-size: 0.9rem;
  margin-right: 3rem;
`;

export const Nav = styled.nav`
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.tablet} {
    overflow-x: auto;
  }
`;

export const NavLink = styled.div`
  cursor: pointer;
  font-size: 0.9rem;
`;

export const NavContainer = styled.div<{
  isLeftOverlayShown: boolean;
  isRightOverlayShown: boolean;
}>`
  overflow-x: hidden;
  position: relative;
  ::before {
    content: "";
    opacity: ${({ isLeftOverlayShown }) => (isLeftOverlayShown ? "1" : "0")};
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.color9},
      transparent
    );
    width: 3rem;
    pointer-events: none;
  }
  ::after {
    content: "";
    opacity: ${({ isRightOverlayShown }) => (isRightOverlayShown ? "1" : "0")};
    transition: opacity 0.3s ease-in-out;
    position: absolute;
    top: 0;
    right: -1px;
    bottom: 0;
    background: linear-gradient(
      to left,
      ${({ theme }) => theme.color9},
      transparent
    );
    width: 3rem;
    pointer-events: none;
  }
  @media ${device.tablet} {
    ::before {
      display: none;
    }
    ::after {
      display: none;
    }
  }
`;
