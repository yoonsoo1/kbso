import styles from '../style'
import { partners } from '../constants'
import layout from '../style'

const Partners = () => {
  return (
    <section id='partners' className={`${styles.flexCenter} flex flex-col justify-center items-center mt-12 mb-12`}>    
      <div className={layout.sectionInfo}>
          <h2 className="font-poppins font-bold text-white text-xl mb-4">
              Partners
          </h2>
      </div>  
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {partners.map((partner) => (
          <div key={partner.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={partner.logo} alt="partner" className='sm:w-[102px] w-[100px] object-contain'/>
          </div>
        ))}
      </div>
    </section>  
  )
}

export default Partners