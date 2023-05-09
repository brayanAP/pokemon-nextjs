"use client";

import { CssBaseline } from "@nextui-org/react";

type Props = {
  children?: React.ReactNode;
};

const Head: React.FC<Props> = ({ children }) => (
  <head>
    {CssBaseline.flush()} {children}
  </head>
);

export default Head;
