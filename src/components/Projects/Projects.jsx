import React from "react";

import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
            
        <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Kencold Company Website </h3>
              <ul>
              <li>Maintained and developed company website via HTML CSS and Javascript.</li>
                <li>Structured the layout and navigation to improve usability and provide a seamless experience for visitors</li>
                <li>Integrated chatbot to accept customer inquiries and give user feedback</li>
            </ul>
            <a href="https://kencold.com" className={styles.projectBtn} target="_blank">Web Link</a>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>BuyMe - Auctioning Web Application </h3>
              <ul>
                <li>Developed a functional online auction web application, allowing users to add listings for selling items or participate in auctions for purchasing, with an API that directly interacts with the database for real-time data operations.</li>
                <li>Executed front-end development using HTML. Back-end logic was developed with Java and JSP</li>
                <li>Designed and implemented the database using MySQL, converting an ER-Diagram and Relational Schema into a robust and scalable data structure to support the application’s operations</li>
            </ul>
            <a href="https://github.com/kenrickeagar/cs336project" className={styles.projectBtn} target="_blank">GitHub</a>
            <a href="https://drive.google.com/file/d/1DWDeeVwPkBOoJNTL-PE9V_NFxKOxsj88/view?usp=drive_link" className={styles.projectBtn} target="_blank">Demo</a>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>RUPizza - Android Application </h3>
              <ul>
                <li>Designed and implemented an interactive Android application that simulates an online pizzeria, allowing user to customize and order pizzas seamlessly</li>
                <li>Enabled users to customize pizzas by selecting types, sizes, and toppings, manage and review order via user- friendly interface, and see dynamic price updates and discounts in real-time</li>
                <li>Front-end development using Android Studio and CSS. Back-end development utilized Java to handle the application’s business logic, including order processing, user authentication, and data management</li>
            </ul>
            <a href="https://github.com/kenrickeagar/RU-Pizza" className={styles.projectBtn} target="_blank">GitHub</a>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};