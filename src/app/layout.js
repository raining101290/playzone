import "./globals.css";

export const metadata = {
  title: "Playzone Project",
  description: "Playzone Project App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
