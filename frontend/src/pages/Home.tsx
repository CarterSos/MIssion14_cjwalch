import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <div className="row p-4">
        <div className="col-4">
          <h1>Joel Hilton's Movie Collection</h1>
          <p>
            Welcome to Joel's Movie Collection. Feel free to navigate the wide
            selection of movies and find your favorites!
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>Use the navbar above to check out this site made with React!</p>
        </div>

        <div className="col App-logo">
          <img
            className={styles.joel}
            src="./JoelHiltonHeadshot.jpg"
            alt="joel"
          />
          <p>Hi I'm joel</p>
        </div>
        <div className="col App-logo2">
          <img className={styles.joel} src="./spencer.jpg" alt="joel" />
          <p>We can't forget about Spencer :)</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>Thanks for coming!</footer>
    </>
  );
}

export default Home;
