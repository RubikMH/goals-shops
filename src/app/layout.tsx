import "./globals.css";
import { css } from "../../styled-system/css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={css({ bg: "#E0E1DD", color: "#0D1B2A" })}>
        {children}
      </body>
    </html>
  );
}
