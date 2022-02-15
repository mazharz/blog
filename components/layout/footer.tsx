import { device } from "@/Styles/globals";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "../element/link";

const Container = styled.footer`
  height: 3.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme.color8};
`;

const Name = styled.div`
  font-size: 0.9rem;
  margin-right: 3rem;
`;

const Nav = styled.nav`
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

const NavLink = styled.div`
  cursor: pointer;
  font-size: 0.9rem;
`;

const NavContainer = styled.div<{
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

const Footer: FC = () => {
  const [isLeftOverlayShown, setIsLeftOverlayShown] = useState<boolean>(false);
  const [isRightOverlayShown, setIsRightOverlayShown] = useState<boolean>(true);

  useEffect(() => {
    const nav: HTMLDivElement | null = document.querySelector("#footer-nav");
    nav?.addEventListener("scroll", _ => {
      setIsLeftOverlayShown(!!nav.scrollLeft);
      setIsRightOverlayShown(
        nav.offsetWidth + nav.scrollLeft < nav.scrollWidth
      );
    });
  }, []);

  return (
    <Container>
      <Name>@{new Date().getFullYear()}!</Name>
      <NavContainer
        isLeftOverlayShown={isLeftOverlayShown}
        isRightOverlayShown={isRightOverlayShown}
      >
        <Nav id="footer-nav">
          <NavLink>
            <Link href="https://github.com/m47h4r" isExternal>
              GitHub
            </Link>
          </NavLink>
          <NavLink>
            <Link href="https://www.linkedin.com/in/m47h4r/" isExternal>
              LinkedIn
            </Link>
          </NavLink>
          <NavLink>
            <Link
              href="https://www.goodreads.com/user/show/121886408-mazhar-zandsalimi"
              isExternal
            >
              Goodreads
            </Link>
          </NavLink>
          <NavLink>
            <Link href="https://www.duolingo.com/profile/m47h4r" isExternal>
              Duolingo
            </Link>
          </NavLink>
        </Nav>
      </NavContainer>
    </Container>
  );
};

export { Footer };
