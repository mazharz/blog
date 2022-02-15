import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { Link } from "../element/link";

const Container = styled.header`
  height: 3.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.color8};
`;

const Name = styled.div`
  font-size: 1.1rem;
`;

const Nav = styled.nav`
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`;

const NavLink = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.9rem;
`;

const Header: FC = () => {
  const router = useRouter();

  return (
    <Container>
      <Name>
        <Link href="/" isActive={router.asPath === "/"}>
          Mazhar Zandsalimi
        </Link>
      </Name>
      <Nav>
        <NavLink>
          <Link href="/projects" isActive={router.asPath === "/projects"}>
            Projects
          </Link>
        </NavLink>
        <NavLink>
          <Link href="/diary" isActive={router.asPath === "/diary"}>
            Diary
          </Link>
        </NavLink>
      </Nav>
    </Container>
  );
};

export { Header };
