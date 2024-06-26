import "swiper/css";
import "./globals.css";
import MainProvider from "@/main";

export const metadata = {
  title: "سایت خبری",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className="body-inner">
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
