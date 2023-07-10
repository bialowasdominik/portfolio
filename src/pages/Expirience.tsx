import React, { useEffect, useState } from 'react';
import { Timeline } from 'primereact/timeline';
import { TimelineEvent } from '../model/TimeLineEvent';
import { useTranslation } from 'react-i18next';
import { AppSettings } from '../utils/AppSettings';

const Expirience = () => {
    const { t, i18n } = useTranslation();
    const [events,setEvents] = useState<TimelineEvent[]>([]);

    useEffect(()=>{
        let data:TimelineEvent[] = i18n.t('expirience.items',{returnObjects: true});
        setEvents(data);
    },[i18n,t])

    const getIcon = (type: string) => {
        return type === 'edu' ? AppSettings.EDUCATION_ICON : AppSettings.WORK_ICON;
    }

    const customizedMarker = (item: TimelineEvent) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-4 main-theme">
                <i className={"pi "+getIcon(item.type!)}></i>
            </span>
        );
    };

    const customizedContent = (item: TimelineEvent) => {
        return (
            <div>
                <span className="font-bold text-2xl">{item.title}</span>
                <p className='font-alt'>{item.date}</p>
                <span className='font-alt'>{item.desc}</span>
            </div>
        );
    };

    return(
        <div className='flex flex-column justify-content-center w-full'>
            <h1 className='text-5xl uppercase text-center'>{t(`expirience.header` as const)}</h1>
            <hr className='mb-6 w-4'/>
            <Timeline value={events} 
                    className='md:px-7'
                    align="alternate" 
                    marker={customizedMarker} 
                    content={customizedContent}/>
        </div>
    );
}

export default Expirience;