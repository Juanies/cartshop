import { Inter } from "next/font/google";
import './ui/global.css'
import Header from '@/components/dashboard/Header'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cart",
  description: "Shop with a cart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}