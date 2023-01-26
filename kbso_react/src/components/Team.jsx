import { Teams } from '../constants'
import layout from '../style'
import styles from '../style'

function Team() {
  return (
    <section id='team' className={`${styles.flexCenter} flex flex-col justify-center items-center mt-12 mb-12`}>    
      <div className={layout.sectionInfo}>
          <h2 className="font-poppins font-bold text-white text-xl mb-4">
              The Board
          </h2>
      </div>  
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {Teams.map((member) => (
          <div key={member.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] team-photo`}>
            <img src={member.image} alt="team" className='sm:w-[102px] w-[100px] object-contain'/>
            <div className='absolute text-center team-position'>
              <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {member.name}
              </h4>
              <p className="font-poppins font-normal text-dimWhite text-[16px] sm:leading-[24px] mb-1">
                {member.role}
              </p>              
            </div>            
          </div>
        ))}
      </div>
    </section>  
  )
}

export default Team