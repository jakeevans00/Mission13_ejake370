import React from 'react';
import styles from './Blah.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
        <div className="col-8">
          <img src="./JoelHiltonHeadshot.jpg" alt="company logo" />
        </div>
      </div>
    </>
  );
}

export default TopBanner;
