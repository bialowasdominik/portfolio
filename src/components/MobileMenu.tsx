import React from 'react';
import { SpeedDial } from 'primereact/speeddial';
import { AppSettings } from '../utils/AppSettings';
import { change } from '../utils/LangugaeChange';

const MobileMenu = () =>{
    const items = [
        {
            label: 'Language',
            icon: "pi "+AppSettings.LANGUAGE_ICON,
            command: () => {
                change();
            }
        },
        {
            label: 'Linkedin',
            icon: "pi "+AppSettings.LINKEDIN_ICON,
            command: () => {
                window.location.href = AppSettings.LINKEDIN_URL;
            }
        },
        {
            label: 'Github',
            icon: "pi "+AppSettings.GITHUUB_ICON,
            command: () => {
                window.location.href = AppSettings.GITHUB_URL;
            }
        },
        {
            label: 'Contact',
            icon: "pi "+AppSettings.ENVELOPE_ICON,
            command: () => {
                window.location.href = "#contact";
            }
        },
        {
            label: 'Projects',
            icon: "pi "+AppSettings.PROJECTS_ICON,
            command: () => {
                window.location.href = "#projects";
            }
        },
        {
            label: 'Expirience',
            icon: "pi "+AppSettings.VERIFIED_ICON,
            command: () => {
                window.location.href = "#expirience";
            }
        },
        {
            label: 'About me',
            icon: "pi "+AppSettings.USER_ICON,
            command: () => {
                window.location.href = "#about-me";
            }
        },
        {
            label: 'Introduce',
            icon: "pi "+AppSettings.HOME_ICON,
            command: () => {
                window.location.href = "#home";
            }
        }
    ];

    return(
        <SpeedDial
            model={items}
            radius={120} 
            showIcon="pi pi-bars" 
            hideIcon="pi pi-times" 
            type="linear" 
            className='fixed bottom-0 z-5 mb-2 ml-2 mobile-menu'
            buttonStyle={
                {
                    background: 'linear-gradient(90deg, rgba(249,130,49,1) 0%, rgba(251,161,34,1) 50%)',
                    border: 0, 
                    color:'white',
                    boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.1), 0px 4px 5px -2px rgba(0, 0, 0, 0.12), 0px 10px 15px -5px rgba(0, 0, 0, 0.2)'}}
            direction="up"/>
    )
}

export default MobileMenu;