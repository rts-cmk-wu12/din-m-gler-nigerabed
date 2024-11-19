import "./globals.css";

export const metadata = {
  title: "Din Mægler",
  description: "Din mægler opgave",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
