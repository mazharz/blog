import { Container, Name, Nav, NavLink } from "./styles";
import { useRouter } from "next/router";
import { FC } from "react";
import { Link } from "@/Components/element/link/link";

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
          <Link href="/blog" isActive={router.asPath === "/blog"}>
            Blog
          </Link>
        </NavLink>
      </Nav>
    </Container>
  );
};

export { Header };
