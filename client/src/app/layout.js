import Layout from "@/components/Layout/Layout";
import "./globals.css";

export const metadata = {
  title: "Seerah",
  description: "The biography of the Prophet Muhammad (peace be upon him).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
