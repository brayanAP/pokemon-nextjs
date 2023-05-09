import { Inter } from "next/font/google";
import RootProviders from "./providers";
import HeadCssBaseline from "./headCssBaseline";

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
    <HeadCssBaseline />
    <body className={inter.className}>
      <RootProviders>{children}</RootProviders>
    </body>
  </html>
);

export default RootLayout;
