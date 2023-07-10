import React, { FC } from 'react';
import { MenuButtonProp } from '../../model/MenuButtonProp';

const MenuButton: FC<MenuButtonProp> = (prop) => {
    return (
        <a
            href={prop?.link}
            className='flex justify-content-center border-circle menu-button'
            id={prop?.id}>
            <i
                className={"pi " + prop?.icon}
                style={{ fontSize: '1.25rem' }}>
                {prop.label}
            </i>
        </a>
    );
}

export default MenuButton;