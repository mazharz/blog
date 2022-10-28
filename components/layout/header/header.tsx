import { Container, Name } from "./styles";
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
    </Container>
  );
};

export { Header };
