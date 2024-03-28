import { Navbar, Footer } from "../../components";
import styles from './home.module.css'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.home_page}>home</div>
      <Footer />
    </div>
  );
};

export default Home;
