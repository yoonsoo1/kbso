import { socialMedia } from "../constants"

function Footer() {
  return (
    <div className="w-full flex justify-between items-center flex-col pt-4 border-t-[1px] border-t-[#3f3r45]">
      <div className="flex flex-row mt-6">
        {socialMedia.map((social, index) => (
          <a href={social.link}>
            <img 
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`mr-4 cursor-pointer ${index === socialMedia.length - 1 ? 'mr-0' : ''}`}
            />
          </a>          
        ))}
      </div>

      <p className="font-poppins font-normal text-[14px] leading-[27px] text-white text-center mt-8 mr-4">
        © USC KBSO 2023
      </p>
    </div>
  )
}

export default Footer