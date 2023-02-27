import styles from './feed.module.css';

export default function Feed(){
    return(
        <div className={styles.bgFeed}>
            <div className= {styles.containerFeed} >
                <img className={styles.newsImg} src='images/news.png'/>
                <div>
                    <div className={styles.parallelogram}>
                        <h1 className={styles.feed}>Feed</h1>
                        
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <ul className={styles.footerList}>
                    <a className={styles.footerLink} href='https://github.com/gusholz/countdownPersona'><li>Github</li></a>
                    <a className={styles.footerLink} href='https://www.linkedin.com/in/gustavo-holzmann-771781175/'><li>Linkedin</li></a>
                    <a className={styles.footerLink} href='https://www.behance.net/gusholz'><li>Behance</li></a>
                </ul>
                <h3 className={styles.credits}>Fan made site devoloped by Gustavo Holzmann (Design and Code)</h3>
                <h3 className={styles.credits}>&</h3>
                <h3 className={styles.credits}>Levi Rios (API implementation)</h3>
                <h3 className={styles.copyright}>Original Content Made By ©ATLUS. ©SEGA. All rights reserved</h3>
            </div>
        </div>
    )
}