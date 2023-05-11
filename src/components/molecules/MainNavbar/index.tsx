import React from "react";
import Image from "next/image";
import { Navbar } from "@nextui-org/react";

const MainNavbar = () => (
  <Navbar isBordered variant="sticky">
    <Navbar.Brand>
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={50}
      />
    </Navbar.Brand>
    <Navbar.Content hideIn="xs">
      <Navbar.Link href="#">Features</Navbar.Link>
      <Navbar.Link isActive href="#">
        Customers
      </Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Company</Navbar.Link>
    </Navbar.Content>
  </Navbar>
);

export default MainNavbar;
