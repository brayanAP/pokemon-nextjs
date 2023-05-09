"use client";
import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
};

const RootProviders: React.FC<Props> = ({ children }) => (
  <NextUIProvider>{children}</NextUIProvider>
);

export default RootProviders;
