import Navbar from "./Navbar";
import Footer from "./Footer";
import CurrentDateTime from "./CurrentDateTime";

interface ChildrenType {
  children: React.ReactNode;
}

export default function Layout({ children }: ChildrenType) {
  return (
    <>
      <Navbar />
      <CurrentDateTime />
      <main style={{ marginBottom: "60px" }}>{children}</main>
      <Footer />
    </>
  );
}
