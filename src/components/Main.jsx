import React from 'react';
import styles from './Main.scss';
import DieSache from "./DieSache/DieSache.jsx";

const Main = function () {
    return (
        <div className={styles.root}>
           <DieSache/>{/*This is a placeholder and should be removed*/}
            {/*The app content goes here*/}
        </div>
    )
}

export default Main;
