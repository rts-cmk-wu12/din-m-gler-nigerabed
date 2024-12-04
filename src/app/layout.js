import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import AuthProvider from "./context/AuthProvider";

export const metadata = {
  title: "Din Mægler",
  description: "Din mægler opgave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
      
          <Header />
          {children}
          <Footer />
       
      </body>
    </html>
  );
}
