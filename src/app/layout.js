import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

export const metadata = {
  title: "Transcao Negoce",
  description: "Transcao Negoce Website",
  icons: {
    icon: 'https://customer-assets.emergentagent.com/job_cocoa-commerce-7/artifacts/995oywbh_image.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
