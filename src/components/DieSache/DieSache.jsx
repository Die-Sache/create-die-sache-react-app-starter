import React from 'react';
import styles from './DieSache.scss';
import sache from '../../assets/sache.jpg';

const DieSache = function () {
    return (
        <div className={styles.sache}>

            <div className={styles.black}>
                <span>Willkommen bei der React-Entwicklung für</span>
                <br/>
                <span><em>Die Sache</em></span>
            </div>

            <div className={styles.red}>
                <img src={sache}/>
            </div>
            <div className={styles.gold}>
                <span className={styles.textIndent}>Entwickel deine App für den Widerstand!</span>
                <span>Finde weitere Informationen zu den Entwicklungsguidlines auf</span>
                <a href="https://github.com/Die-Sache/create-die-sache-react-app-starter/blob/main/README.md">
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default DieSache;
