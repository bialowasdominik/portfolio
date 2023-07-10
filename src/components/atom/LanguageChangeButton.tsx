import React, { useState } from 'react';
import usaFlag from '../../assets/usa-flag.png';
import polandFlag from '../../assets/poland-flag.png';
import { motion } from 'framer-motion';
import { change } from '../../utils/LangugaeChange';

const LanguageChange = () =>{
    const [isPolish, setIsPolish] = useState<boolean>(false);

    return(
        <motion.div 
            whileTap={{ scale: 0.6 }} 
            className='w-full flex justify-content-center cursor-pointer' 
            onClick={()=>{change(); setIsPolish(!isPolish)}}>
            <img src={isPolish ? polandFlag : usaFlag} className='w-2rem' alt='Language flag'/>
        </motion.div>
    );
}

export default LanguageChange;