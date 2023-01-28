import styles from '../style';
import ScrollBtn from '../components/ScrollBtn';

const Hero = ({initRef}) => {   
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        initRef.current.scrollIntoView({ behavior: 'smooth'});
    };
    return (
        <section id="home" className={`${styles.paddingY}`}>
            <div className="flex flex-col justify-center items-center mt-12 mb-12">
                <h1 className="text-4xl text-center font-bold text-white text-gradient">KOREAN BUSINESS STUDENT ORGANIZATION</h1>
                <p className="text-white text-center text-l font-poppins font-normal mt-4">USC's Official Korean Business Student Cohort</p>
                <button 
                    className="bg-white text-black mt-8 px-8 py-2 rounded-lg hover:bg-secondary hover:text-white transition duration-300 ease-in-out"
                    onClick={onButtonClick}
                >
                    Learn More
                </button>                
            </div>
        </section>
    )  
}

export default Hero