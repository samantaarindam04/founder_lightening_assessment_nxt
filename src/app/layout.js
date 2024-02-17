import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Providers from "../../redux/provider";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export const metadata = {
  title: "Photo Album",
  description: "Arindam's assignment for Founder and Lighntening",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
