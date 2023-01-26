import styles, { layout } from "../style";
import {forwardRef} from 'react';
import { Initiatives } from "../constants";

const InitCard = ({icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] feature-card min-h-full`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
        </div>        
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {title} 
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] sm:leading-[24px] mb-1">
                {content}
            </p>
        </div>
    </div>
);

const Init = (props, initRef) => (
    <section ref={initRef} id="initiatives" className="flex flex-col justify-center items-center">
        <div className={layout.sectionInfo}>
            <h2 className="font-poppins font-bold text-white text-xl mb-4">
                Initiatives
            </h2>
        </div>

        <div className="sm:flex">
            {Initiatives.map((init, index) => (
                <InitCard key={init.id} {...init} index={index}/>
            ))}            
        </div>   
    </section>
);      

export default forwardRef(Init);