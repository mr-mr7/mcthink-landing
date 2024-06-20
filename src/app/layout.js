import "swiper/css";
import "./globals.css";

export const metadata = {
  title: "سایت خبری",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className="body-inner">{children}</body>
    </html>
  );
}
