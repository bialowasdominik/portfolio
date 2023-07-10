import React, { useEffect } from 'react';
import MenuButton from './atom/MenuButton';
import { MenuButtonProp } from '../model/MenuButtonProp';
import { attachClassWhenInVieport } from '../utils/Utils';
import { AppSettings } from '../utils/AppSettings';
import LanguageChange from './atom/LanguageChangeButton';

const Appbar = () =>{
    const mainMenu:MenuButtonProp[] = [
        new MenuButtonProp(AppSettings.HOME_ICON,'#home','home-button'),
        new MenuButtonProp(AppSettings.USER_ICON,'#about-me','about-button'),
        new MenuButtonProp(AppSettings.VERIFIED_ICON,'#expirience','expirience-button'),
        new MenuButtonProp(AppSettings.PROJECTS_ICON,'#projects','projects-button'),
        new MenuButtonProp(AppSettings.ENVELOPE_ICON,'#contact','contact-button'),
    ]

    const socialMedia:MenuButtonProp[] = [
        new MenuButtonProp(AppSettings.GITHUUB_ICON, AppSettings.GITHUB_URL, 'github-button'),
        new MenuButtonProp(AppSettings.LINKEDIN_ICON, AppSettings.LINKEDIN_URL, 'linkedin-button'),
    ]
    
    useEffect(()=>{
        window.addEventListener('scroll',() => attachClassWhenInVieport(mainMenu,AppSettings.ACTIVE_MENU_ITEM_CLASS_NAME));
        document.getElementById("home-button")?.classList.add(AppSettings.ACTIVE_MENU_ITEM_CLASS_NAME);
    },[])

    return(
        <div className='z-5 fixed flex align-items-center h-full ml-5 desktop-menu'>
            <div id='main-container' className='shadow-5 flex flex-column surface-0 py-4 px-2 gap-2'>
                {
                    mainMenu.map((item:MenuButtonProp, index) => 
                        <MenuButton icon={item.icon} link={item.link} id={item.id} key={index} aria-label={item.id}/>
                    )
                }
                <hr className='w-7'/>
                {
                    socialMedia.map((item:MenuButtonProp,index ) => 
                        <MenuButton icon={item.icon} link={item.link} id={item.id} key={index} aria-label={item.id}/>
                    )
                }
                <hr className='w-7'/>
                <LanguageChange/>
            </div>
        </div>
    );
}

export default Appbar;