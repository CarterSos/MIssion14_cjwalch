import React from 'react';
import styles from './Home.module.css';

function Podcasts() {
  return (
    <>
      <div className="p-4">
        <h1>DID YOU KNOW THAT?!?</h1>
        <h3>Joel and his best buddies have their own podcast! Check it out!</h3>
      </div>
      <br />
      <div className={styles.center1}>
        <a href="https://baconsale.com/">
          <button className={styles.bigbutton}>Go to Baconsale Podcast</button>
        </a>
      </div>
    </>
  );
}

export default Podcasts;
