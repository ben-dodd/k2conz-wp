import Alert from "../components/alert";
import Footer from "../components/footer";
import Header from "../components/header";
import Menu from "../components/menu";
import Meta from "../components/meta";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <Menu />
      <div className="min-h-screen">
        {/*<Alert preview={preview} />*/}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
