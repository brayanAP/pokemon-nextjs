import { Inter } from "next/font/google";
import Providers from "./providers";
import Head from "./head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokemon Next App",
  description: "Pokemon Directory",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout: React.FC<Props> = ({ children }) => (
  <html lang="en">
    <Head />
    <body className={inter.className}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
