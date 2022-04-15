import { FC } from "react";
import { Header } from "@/Components/layout/header/header";
import { Footer } from "@/Components/layout/footer/footer";
import { BodyContainer, Container } from "./styles";

const Layout: FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <BodyContainer>{children}</BodyContainer>
      <Footer />
    </Container>
  );
};

export { Layout };
