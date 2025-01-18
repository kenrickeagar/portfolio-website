import React from "react";
import { getImageUrl } from "../../../utils";
import styles from "./Hero.module.css"
export const Hero = () => {
    return (
    <section className ={styles.container}> 
    <img src={getImageUrl("/hero/kenIcon.png")} className={styles.heroImg}/>
        <div clasName={StyleSheet.topBlur}/>
        <div clasName={StyleSheet.bottomBlur}/>
        
        <div className ={styles.content}>
            <h1 className={styles.title}>Welcome,</h1>
            <h1 className={styles.title2}>My Name is Kenrick Eagar</h1>
            <p className={styles.description}>Software Engineer and IT Enthusiast</p>
            <p className={styles.description2}>Bachelors In Computer Science</p>
            <a href="mailto:kenrickaeagar@gmail.com" className={styles.contactBtn}> Contact Me</a>
        </div>
        
    </section>
    );
};