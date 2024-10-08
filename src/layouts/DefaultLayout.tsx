import { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {/* <div> */}
      <Header />

      {/* </div> */}

      {/* Main content */}
      <main className="flex-grow pt-2 md:pt-8 lg:pt-16 bg-cyan-50">
        <div className="container mx-auto px-4">{children}</div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
