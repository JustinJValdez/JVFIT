import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

import styles from "../styles/Layout.module.css"

const Layout = ({children})=>{
  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;