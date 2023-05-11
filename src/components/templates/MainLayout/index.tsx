import React from "react";
import { Container, Content } from "./styles";

type Props = {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer?: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children, navbar, footer }) => {
  return (
    <Container>
      {navbar}
      <Content>{children}</Content>
      {footer}
    </Container>
  );
};

export default MainLayout;
