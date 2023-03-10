import styles from "../styles/Navbar.module.css";

import Link from "next/link";

export default function Navbar () {
  
function openNav(){
  document.getElementById("myNav").style.width = '250px';
}  

function closeNav(){
  document.getElementById("myNav").style.width = '0';
}

  return(
    <>
    <span onClick={openNav}>MENU</span>
      <div className={styles.Navbar} id="myNav">
        <ul>
          <li>
            <Link href="javascript:void(0)" className={styles.closebtn} onClick={closeNav}>
            &times;</Link>
          </li>
          <li>
            <Link href="/#home">
              Home
            </Link>
          </li>
          <li>
            <Link href="/#online">
              Online Coaching
            </Link>
          </li>
          <li>
            <Link href="/#training">
              In-Person training
            </Link>
          </li>
          <li>
            <Link href="/#rehab">
              Rehab
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
};


