import styles from './app.module.css';
import Counter from './components/counter/counter';
import Feed from './components/feed/feed';
import '@nextcss/reset';

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.bgTop}>
        <div className={styles.containerApp}>
          <Counter/>
          <img src="images/logoP5Royal.png" alt="Logo Persona 5 Royal" className={styles.logoP5}/>
        </div>
      </div>
      <div className={styles.bgFeed}>
        <Feed/>
      </div>
    </div>  
  );
}
