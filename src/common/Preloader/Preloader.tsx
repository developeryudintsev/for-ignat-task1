import React from 'react';
import styles from './Preloader.module.css'
import preloader from "./../../assets/images/preloader.svg";

export const Preloader=()=>{
    return(
        <div className={styles.flexContainer}>
            <img className={styles.isFetching} src={preloader}/>
        </div>
    )
}