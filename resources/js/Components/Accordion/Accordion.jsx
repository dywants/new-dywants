import React, { useState } from 'react';
import AccordionLayout from './AccordionLayout/AccordionLayout';

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    return (
        <div className='flex flex-col justify-center items-center w-full px-8'>
          <AccordionLayout 
            title="Temps nécessaire pour la mise en place" 
            index={1}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}>
            Votre temps vaut de l’or. Nous deployons nos solutions en quelques clics afin de vous permettre d’être actif.   
          </AccordionLayout>

          <AccordionLayout 
            title="Pourquoi choisir Dywants Technology?" 
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}>
            Votre temps vaut de l’or. Nous deployons nos solutions en quelques clics afin de vous permettre d’être actif.   
          </AccordionLayout>
      </div>
    );
};

export default Accordion;