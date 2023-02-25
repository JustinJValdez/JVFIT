import styles from "../styles/Navbar.module.css";

import Link from "next/link";

const Navbar = () => { 

  return(
    <div className={styles.Navbar}>
      <Link href="/#top">
      Home
      </Link>
    </div>
  )
}
