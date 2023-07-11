import Header from "@/components/header";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Quick Silver",
  description:
    "The Quicksilver Protocol is redefining staking in the Cosmos ecosystem and beyond",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div style={{ marginTop: "96px" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
