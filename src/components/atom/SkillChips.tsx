import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { item } from '../../utils/AnimationsConfig';

interface SkillChipsProp{
    value: string;
}

const SkillChips:FC<SkillChipsProp> = ({value})=> {
    return (
        <motion.div
            variants={item}
            whileHover={{ scale: 1.1 }}
            className='surface-300 px-3 py-1 flex shadow-3 cursor-pointer border-round-3xl text-lg'>
            {value}
        </motion.div>
    );
}

export default SkillChips;