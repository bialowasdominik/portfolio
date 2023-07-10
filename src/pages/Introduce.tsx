import React from 'react';
import Typewriter from 'react-ts-typewriter';
import {motion} from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Introduce = () =>{
    const { t } = useTranslation();

    return(
        <div className='w-full flex flex-wrap align-content-center justify-content-center gap-8'>
            <div className='flex flex-column align-items-start justify-content-center p-3'>
                <h1 className='text-5xl w-12'>
                    <Typewriter text={t(`introduce.header` as const)!} speed={100}/>
                </h1>
                <p className='text-lg text-justify' style={{whiteSpace:'pre-line'}}>
                    {t(`introduce.desc` as const)}
                </p>
            </div> 
            <div className='flex align-content-center justify-content-center'>
                <motion.img 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }} 
                    src={require("../assets/face.jpg")} 
                    alt={t(`alt.author` as const)!}
                    className='shadow-5 z-4 border-circle photo-resolution'/>
            </div>
        </div>
    );
}

export default Introduce;