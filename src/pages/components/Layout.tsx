import { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [isReady, setIsReady] = useState<boolean>(false);
  useEffect(() => {
    if (router.isReady) setIsReady(true);
  }, [router.isReady]);

  if (!isReady) return null;

  const excludePage = ["/signUp", "/signIn"];
  // const excludeFooter = ["/dashboard"];

  const showNavbar = !excludePage.includes(router.pathname);
  // const showFooter = showNavbar && !excludeFooter.includes(router.pathname);

  return (
    <>
      {showNavbar && (
        <Navbar isDashboard={router.pathname.includes("/dashboard")} />
      )}
      <main className="content">{children}</main>
      {showNavbar && <Footer />}
      {/* {showFooter && <Footer />} */}
    </>
  );
}
