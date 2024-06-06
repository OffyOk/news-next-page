import Navbar from "./Navbar";
import Footer from "./Footer";
import CurrentDateTime from "./CurrentDateTime";
import CurrentDateTimeMom from "./CurrentDateTimeMom";

interface ChildrenType {
  children: React.ReactNode;
}

export default function Layout({ children }: ChildrenType) {
  return (
    <>
      <Navbar />
      {/* <CurrentDateTime /> */}
      <CurrentDateTimeMom />
      <main style={{ marginBottom: "60px" }}>{children}</main>
      <Footer />
    </>
  );
}
