import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Work Experience</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("/about/Kencold.png")} alt="Cursor icon" className={styles.Kencold}/>
            <div className={styles.aboutItemText}>
              <h3>Website Developer - Kencold LLC </h3>
              <h3>January 2022 - Present </h3>
              <ul>
                <li>Maintained and developed company website via HTML CSS and Javascript.</li>
                <li>Structured the layout and navigation to improve usability and provide a seamless experience for visitors</li>
                <li>Integrated chatbot to accept customer inquiries and give user feedback</li>
                
            </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("/about/RutgersOITLogo.PNG")} alt="Server icon" className={styles.RutgersOIT} />
            <div className={styles.aboutItemText}>
              <h3>IT Consultant - Rutgers Office of Information Technology</h3>
              <h3>May 2023 - October 2023</h3>
              <ul>
                <li>Provided technical support to callers, assisted with inquiries related to Rutgers services that included DUO 
                multifactor authentication, NetID password lockouts, and Canvas issues. </li>
                <li>Resolved over 70 incidents by troubleshooting various issues. Documented call information using ServiceNow 
                and actively listened to determine when to escalate issues to the appropriate team when necessary</li>
            </ul>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("/about/RutgersLogo.png")} alt="UI icon" className={styles.RutgersOIT}/>
            <div className={styles.aboutItemText}>
              <h3>Information Assistant/Mentor - Rutgers OneStop Student Services</h3>
              <h3>March 2022 - Present</h3>
              <ul>
                <li>Answer incoming phone calls from students and their families for the areas of Undergraduate Admissions, 
                Office of Financial Aid, the Registrar, and Student Accounting </li>
                <li>Documented calls via Salesforce and used various financial aid systems/software such as Oracle OSFP, Five9 
                QuikPay and Rutgers OS screen (internal</li>
                <li>Onboarded and trained new hires</li>
            </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};