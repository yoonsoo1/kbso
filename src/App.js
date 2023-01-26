import styles from "./style";
import { Navbar, Hero, Footer, Init, Partners, Team } from "./components";
import { useRef } from "react";

function App() {
  const initRef = useRef(null);

  return (
    <div id="home" className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero initRef={initRef}/>
          </div>
        </div>

        <div className={`bg-primary ${styles.paddingX} ${styles.paddingY}`}>
          <div className={`${styles.boxWidth}`}>            
            <Init ref={initRef}/>
            <Team/>
            <Partners />            
            <Footer/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
