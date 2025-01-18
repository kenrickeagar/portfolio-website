
import styles from'./App.module.css'
import { Hero } from './components/Navbar/Hero/Hero' 
import { Navbar } from './components/Navbar/Navbar';
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
  <div className={styles.App}> 
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
  </div>
  );
}

export default App;
