import { FC, useEffect, useState } from "react";
import { Link } from "@/Components/element/link/link";
import { Container, Name, Nav, NavContainer, NavLink } from "./styles";

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
