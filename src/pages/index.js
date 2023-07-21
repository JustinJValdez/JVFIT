import styles from '@/styles/Home.module.css'

import Image from 'next/image';
import bkrd1 from '../photos/bkrd1.jpg';


export default function Home() {
  return (
    <>
    <div id='home' className={styles.main}>
    <div className={styles.bkrd}>
    <Image 
      src={bkrd1}
      alt="workout supplies and clipboard"
      priority
      fill
      sizes='100vw'
      style={{objectFit:"cover"}}
      />
    </div>
    <div className={styles.text}>
    <main>
        JV FIT
        <br></br>
        Health and Wellness Coaching
        <br></br>
        Online Personal Training 
        <br></br>
        Personal Training - 1:1/group
        <br></br>
        Rehab
        <br></br>
        Client testimonials

      </main>
    </div>
    </div>
    
      
    </>
  );
}
