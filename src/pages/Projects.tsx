import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { ProjectInterface } from '../model/ProjectInterface';
import { AppSettings } from '../utils/AppSettings';
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t, i18n } = useTranslation();
    const [projects,setProjects] = useState<ProjectInterface[]>([]);

    useEffect(()=>{
        const data:ProjectInterface[] = i18n.t('projects.items',{returnObjects: true});
        setProjects(data);
    },[i18n,t])
    
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (project: ProjectInterface) => {
        return (
            <div className="border-1 surface-border border-round-2xl m-2 text-center py-5 px-3">
                <div>
                    <h1 className="mb-1 text-2xl">{project.title}</h1>
                    <h4 className="mt-0 mb-3 font-alt">{project.subtitle}</h4>
                    <p className='text-justify px-5 font-alt'>{project.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-4 justify-content-center">
                        {project.demoURL && 
                            <Button 
                                icon={"pi "+AppSettings.DESKTOP_ICON} 
                                onClick={()=>document.location.href=String(project.demoURL)} 
                                className="p-button p-button-rounded shadow-3" 
                                label='Live demo' 
                                style={{background:'linear-gradient(90deg, rgba(249,130,49,1) 0%, rgba(251,161,34,1) 50%)', border:'0', color:'white'}}/>
                        }
                        <Button 
                            icon={"pi "+AppSettings.CODE_ICON} 
                            onClick={()=>document.location.href=String(project.gitURL)} 
                            className="p-button-rounded text-color" 
                            outlined 
                            label={project.gitButton}/>
                    </div>
                </div>
            </div>
        );
    };

    return(
        <div className='flex-column justify-content-center w-full h-full'>
            <h1 className='text-5xl uppercase text-center'>{t(`projects.header` as const)}</h1>
            <hr className='mb-6 w-3'/>
            <div className="flex justify-content-center">
                <Carousel 
                    className='w-12'
                    value={projects}
                    numVisible={3}
                    numScroll={3} 
                    responsiveOptions={responsiveOptions} 
                    itemTemplate={productTemplate}
                    pt={{
                        indicatorButton: { 
                            className: 'border-circle',
                            style:{
                                width:'8px'
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export default Projects;