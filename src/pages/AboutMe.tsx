import React, { useEffect, useState } from 'react';
import SkillChips from '../components/atom/SkillChips';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SkillsInterface } from '../model/SkillsInterface';
import { container } from '../utils/AnimationsConfig';

const AboutMe = () => {
    const { t, i18n } = useTranslation();
    const [skills, setSkills] = useState<SkillsInterface[]>([]);
    
    useEffect(() => {
        let data: SkillsInterface[] = i18n.t('skills.items', { returnObjects: true });
        setSkills(data);
    },[i18n,t])

    return (
        <div className='flex flex-wrap justify-content-center w-full' style={{whiteSpace:'pre-line'}}>
            <div className='md:col-6'>
                <h1 className='text-5xl uppercase text-center'>{t(`aboutme.header` as const)}</h1>
                <hr className='mb-6 w-7' />
                <p className='text-justify px-5 text-lg'>{t(`aboutme.content` as const)}</p>
            </div>
            <div className='md:col-6'>
                <h1 className='text-5xl uppercase text-center'>{t(`skills.header` as const)}</h1>
                <hr className='mb-6 w-7' />
                {skills.map((x, index) =>
                    <div key={index}>
                        <p className='text-xl font-bold px-5'>{t(`skills.items.${index}.header` as const)}</p>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.8 }}
                            className='flex flex-wrap gap-3 px-5 pb-5'>
                            {x.items!.map((x, index) => <SkillChips value={x} key={index}/>)}
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AboutMe;