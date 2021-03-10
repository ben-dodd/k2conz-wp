import Alert from "../components/alert";
import Breadcrumbs from "../components/breadcrumbs";
import Footer from "../components/footer";
import Header from "../components/header";
import Menu from "../components/menu";
import Meta from "../components/meta";
import { useRouter } from "next/router";

export default function Layout({ preview, children }) {
  const router = useRouter();
  return (
    <>
      <Meta />
      <Header />
      <Menu />
      {router.asPath !== "/" && <Breadcrumbs />}
      <div className="min-h-screen">
        {/*<Alert preview={preview} />*/}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
