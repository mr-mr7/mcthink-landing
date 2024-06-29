import "./globals.css";
import MainProvider from "@/main";
import ProgressBar from "@/structure/organism/PrgressBar";

export const metadata = {
  title: "سایت خبری" ,
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className="body-inner">
        <ProgressBar
          height="4px"
          color="#1e88e5"
          options={{ showSpinner: true }}
          shallowRouting
        />
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
