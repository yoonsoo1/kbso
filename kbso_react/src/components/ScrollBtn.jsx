import { useRef } from 'react';

const ScrollBtn = ({element}) => {  
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    element.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>        
        <button className='text-white mt-10' onClick={onButtonClick}>Scroll</button>
    </>
  )
}

export default ScrollBtn